import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DocumentResponse } from "./documentresponse";
import { Moderation } from "./moderation";


export class HttpPost extends SpeakeasyBase {
  @Metadata({ data: "json, name=attachments", elemType: shared.DocumentResponse })
  attachments?: DocumentResponse[];

  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=isFacilitatorPost" })
  isFacilitatorPost?: boolean;

  @Metadata({ data: "json, name=moderation" })
  moderation?: Moderation;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
