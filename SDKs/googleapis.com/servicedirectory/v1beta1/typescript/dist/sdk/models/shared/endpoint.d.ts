import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An individual endpoint that provides a service. The service must already exist to create an endpoint.
**/
export declare class EndpointInput extends SpeakeasyBase {
    address?: string;
    metadata?: Map<string, string>;
    name?: string;
    network?: string;
    port?: number;
}
/**
 * An individual endpoint that provides a service. The service must already exist to create an endpoint.
**/
export declare class Endpoint extends SpeakeasyBase {
    address?: string;
    createTime?: string;
    metadata?: Map<string, string>;
    name?: string;
    network?: string;
    port?: number;
    updateTime?: string;
}
