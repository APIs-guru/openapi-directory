import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConnectorVersion } from "./connectorversion";


// ListConnectorVersionsResponse
/** 
 * Response message for Connectors.ListConnectorVersions.
**/
export class ListConnectorVersionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectorVersions", elemType: shared.ConnectorVersion })
  connectorVersions?: ConnectorVersion[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
