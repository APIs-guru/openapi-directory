import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DatacenterConnector } from "./datacenterconnector";



// ListDatacenterConnectorsResponse
/** 
 * Response message for 'ListDatacenterConnectors' request.
**/
export class ListDatacenterConnectorsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=datacenterConnectors", elemType: DatacenterConnector })
  datacenterConnectors?: DatacenterConnector[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
