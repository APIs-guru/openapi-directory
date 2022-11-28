import { SpeakeasyBase } from "../../../internal/utils";
import { SqlIntegration } from "./sqlintegration";
/**
 * ListSQLIntegrationsResponse is the response message for ListSQLIntegrations method.
**/
export declare class ListSqlIntegrationsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    sqlIntegrations?: SqlIntegration[];
    unreachable?: string[];
}
