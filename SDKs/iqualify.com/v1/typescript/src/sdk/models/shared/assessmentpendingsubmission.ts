import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Document } from "./document";
import { ThemeResponse } from "./themeresponse";
import { User } from "./user";


export class AssessmentPendingSubmission extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=documents", elemType: shared.Document })
  documents?: Document[];

  @Metadata({ data: "json, name=dueDate" })
  dueDate?: Date;

  @Metadata({ data: "json, name=durationMinutes" })
  durationMinutes?: number;

  @Metadata({ data: "json, name=filename" })
  filename?: string;

  @Metadata({ data: "json, name=hidden" })
  hidden?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=markNumber" })
  markNumber?: string;

  @Metadata({ data: "json, name=markType" })
  markType?: string;

  @Metadata({ data: "json, name=maxAttempts" })
  maxAttempts?: number;

  @Metadata({ data: "json, name=offeringId" })
  offeringId?: string;

  @Metadata({ data: "json, name=offeringName" })
  offeringName?: string;

  @Metadata({ data: "json, name=openDate" })
  openDate?: Date;

  @Metadata({ data: "json, name=pid" })
  pid?: string;

  @Metadata({ data: "json, name=points" })
  points?: string;

  @Metadata({ data: "json, name=themes", elemType: shared.ThemeResponse })
  themes?: ThemeResponse[];

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=totalQuestions" })
  totalQuestions?: number;

  @Metadata({ data: "json, name=totalThemes" })
  totalThemes?: number;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=users", elemType: shared.User })
  users?: User[];
}
