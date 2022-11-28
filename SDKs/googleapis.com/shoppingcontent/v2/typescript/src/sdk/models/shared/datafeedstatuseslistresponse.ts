import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DatafeedStatus } from "./datafeedstatus";



export class DatafeedstatusesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: DatafeedStatus })
  resources?: DatafeedStatus[];
}
