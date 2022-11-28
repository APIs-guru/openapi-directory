import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BlogUserInfo } from "./bloguserinfo";
import { Blog } from "./blog";



export class BlogList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blogUserInfos", elemType: BlogUserInfo })
  blogUserInfos?: BlogUserInfo[];

  @SpeakeasyMetadata({ data: "json, name=items", elemType: Blog })
  items?: Blog[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
