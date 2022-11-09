import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Post } from "./post";
import { PostPerUserInfo } from "./postperuserinfo";


export class PostUserInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=post" })
  post?: Post;

  @Metadata({ data: "json, name=post_user_info" })
  postUserInfo?: PostPerUserInfo;
}
