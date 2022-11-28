import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Blog } from "./blog";
import { BlogPerUserInfo } from "./blogperuserinfo";



export class BlogUserInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blog" })
  blog?: Blog;

  @SpeakeasyMetadata({ data: "json, name=blog_user_info" })
  blogUserInfo?: BlogPerUserInfo;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
