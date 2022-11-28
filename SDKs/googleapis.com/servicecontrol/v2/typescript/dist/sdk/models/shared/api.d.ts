import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This message defines attributes associated with API operations, such as a network API request. The terminology is based on the conventions used by Google APIs, Istio, and OpenAPI.
**/
export declare class Api extends SpeakeasyBase {
    operation?: string;
    protocol?: string;
    service?: string;
    version?: string;
}
