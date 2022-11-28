import { SpeakeasyBase } from "../../../internal/utils";
import { SqlIntegration } from "./sqlintegration";
/**
 * ListSqlIntegrationsResponse is the response message for ListSqlIntegrations method.
**/
export declare class ListSqlIntegrationsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    sqlIntegrations?: SqlIntegration[];
    unreachable?: string[];
}
