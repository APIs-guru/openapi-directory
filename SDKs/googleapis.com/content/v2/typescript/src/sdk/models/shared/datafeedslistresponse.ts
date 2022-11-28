import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Datafeed } from "./datafeed";



export class DatafeedsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: Datafeed })
  resources?: Datafeed[];
}
