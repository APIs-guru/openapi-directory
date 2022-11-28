import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Document } from "./document";
import { ThemeResponse } from "./themeresponse";
import { User } from "./user";



export class AssessmentPendingSubmission extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=documents", elemType: Document })
  documents?: Document[];

  @SpeakeasyMetadata({ data: "json, name=dueDate" })
  dueDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=durationMinutes" })
  durationMinutes?: number;

  @SpeakeasyMetadata({ data: "json, name=filename" })
  filename?: string;

  @SpeakeasyMetadata({ data: "json, name=hidden" })
  hidden?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=markNumber" })
  markNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=markType" })
  markType?: string;

  @SpeakeasyMetadata({ data: "json, name=maxAttempts" })
  maxAttempts?: number;

  @SpeakeasyMetadata({ data: "json, name=offeringId" })
  offeringId?: string;

  @SpeakeasyMetadata({ data: "json, name=offeringName" })
  offeringName?: string;

  @SpeakeasyMetadata({ data: "json, name=openDate" })
  openDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=pid" })
  pid?: string;

  @SpeakeasyMetadata({ data: "json, name=points" })
  points?: string;

  @SpeakeasyMetadata({ data: "json, name=themes", elemType: ThemeResponse })
  themes?: ThemeResponse[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=totalQuestions" })
  totalQuestions?: number;

  @SpeakeasyMetadata({ data: "json, name=totalThemes" })
  totalThemes?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=users", elemType: User })
  users?: User[];
}
