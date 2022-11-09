import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PostUserInfo } from "./postuserinfo";


export class PostUserInfosList extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.PostUserInfo })
  items?: PostUserInfo[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
