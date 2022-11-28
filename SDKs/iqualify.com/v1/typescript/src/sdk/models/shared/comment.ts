import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Moderation } from "./moderation";



export class Comment extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=parentCommentId" })
  parentCommentId?: string;

  @SpeakeasyMetadata({ data: "json, name=postId" })
  postId?: string;
}
