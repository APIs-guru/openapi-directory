import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Moderation } from "./moderation";


export class Comment extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=parentCommentId" })
  parentCommentId?: string;

  @Metadata({ data: "json, name=postId" })
  postId?: string;
}
