import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BlogUserInfo } from "./bloguserinfo";
import { Blog } from "./blog";


export class BlogList extends SpeakeasyBase {
  @Metadata({ data: "json, name=blogUserInfos", elemType: shared.BlogUserInfo })
  blogUserInfos?: BlogUserInfo[];

  @Metadata({ data: "json, name=items", elemType: shared.Blog })
  items?: Blog[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
