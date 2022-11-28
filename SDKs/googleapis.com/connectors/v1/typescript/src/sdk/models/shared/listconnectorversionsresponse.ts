import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConnectorVersion } from "./connectorversion";



// ListConnectorVersionsResponse
/** 
 * Response message for Connectors.ListConnectorVersions.
**/
export class ListConnectorVersionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectorVersions", elemType: ConnectorVersion })
  connectorVersions?: ConnectorVersion[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
