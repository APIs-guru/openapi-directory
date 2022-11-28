import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Endpoint config for this cluster
**/
export declare class EndpointConfigInput extends SpeakeasyBase {
    enableHttpPortAccess?: boolean;
}
/**
 * Endpoint config for this cluster
**/
export declare class EndpointConfig extends SpeakeasyBase {
    enableHttpPortAccess?: boolean;
    httpPorts?: Map<string, string>;
}
