import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Post } from "./post";
import { PostPerUserInfo } from "./postperuserinfo";



export class PostUserInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=post" })
  post?: Post;

  @SpeakeasyMetadata({ data: "json, name=post_user_info" })
  postUserInfo?: PostPerUserInfo;
}
