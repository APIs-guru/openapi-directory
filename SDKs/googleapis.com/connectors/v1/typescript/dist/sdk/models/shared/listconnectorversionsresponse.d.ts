import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectorVersion } from "./connectorversion";
/**
 * Response message for Connectors.ListConnectorVersions.
**/
export declare class ListConnectorVersionsResponse extends SpeakeasyBase {
    connectorVersions?: ConnectorVersion[];
    nextPageToken?: string;
    unreachable?: string[];
}
