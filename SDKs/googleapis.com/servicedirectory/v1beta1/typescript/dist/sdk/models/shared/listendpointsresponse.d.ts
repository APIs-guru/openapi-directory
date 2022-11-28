import { SpeakeasyBase } from "../../../internal/utils";
import { Endpoint } from "./endpoint";
/**
 * The response message for RegistrationService.ListEndpoints.
**/
export declare class ListEndpointsResponse extends SpeakeasyBase {
    endpoints?: Endpoint[];
    nextPageToken?: string;
}
