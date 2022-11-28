import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Query } from "./query";



export class ListQueriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=queries", elemType: Query })
  queries?: Query[];
}
