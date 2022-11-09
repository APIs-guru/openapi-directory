import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Blog } from "./blog";
import { BlogPerUserInfo } from "./blogperuserinfo";


export class BlogUserInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=blog" })
  blog?: Blog;

  @Metadata({ data: "json, name=blog_user_info" })
  blogUserInfo?: BlogPerUserInfo;

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
