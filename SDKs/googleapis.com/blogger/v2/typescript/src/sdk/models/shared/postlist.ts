import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Post } from "./post";



export class PostList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: Post })
  items?: Post[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=prevPageToken" })
  prevPageToken?: string;
}
