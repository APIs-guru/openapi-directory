import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PostUserInfo } from "./postuserinfo";



export class PostUserInfosList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: PostUserInfo })
  items?: PostUserInfo[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
