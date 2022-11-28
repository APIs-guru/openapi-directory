import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Comment } from "./comment";



export class CommentList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: Comment })
  items?: Comment[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=prevPageToken" })
  prevPageToken?: string;
}
