import { SpeakeasyBase } from "../../../internal/utils";
import { Gateway } from "./gateway";
/**
 * Response returned by the ListGateways method.
**/
export declare class ListGatewaysResponse extends SpeakeasyBase {
    gateways?: Gateway[];
    nextPageToken?: string;
}
