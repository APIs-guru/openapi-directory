import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DocumentResponse } from "./documentresponse";
import { Moderation } from "./moderation";



export class HttpPost extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attachments", elemType: DocumentResponse })
  attachments?: DocumentResponse[];

  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=isFacilitatorPost" })
  isFacilitatorPost?: boolean;

  @SpeakeasyMetadata({ data: "json, name=moderation" })
  moderation?: Moderation;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
