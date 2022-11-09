import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Document } from "./document";


export class Assignments extends SpeakeasyBase {
  @Metadata({ data: "json, name=files", elemType: shared.Document })
  files?: Document[];

  @Metadata({ data: "json, name=marks" })
  marks?: any[];

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=submittedAt" })
  submittedAt?: Date;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;
}
