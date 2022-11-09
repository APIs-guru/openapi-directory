import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DatacenterConnector } from "./datacenterconnector";


// ListDatacenterConnectorsResponse
/** 
 * Response message for 'ListDatacenterConnectors' request.
**/
export class ListDatacenterConnectorsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=datacenterConnectors", elemType: shared.DatacenterConnector })
  datacenterConnectors?: DatacenterConnector[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
