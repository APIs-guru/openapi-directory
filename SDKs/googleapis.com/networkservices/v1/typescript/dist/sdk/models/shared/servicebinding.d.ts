import { SpeakeasyBase } from "../../../internal/utils";
/**
 * ServiceBinding is the resource that defines a Service Directory Service to be used in a BackendService resource.
**/
export declare class ServiceBinding extends SpeakeasyBase {
    createTime?: string;
    description?: string;
    labels?: Map<string, string>;
    name?: string;
    service?: string;
    updateTime?: string;
}
/**
 * ServiceBinding is the resource that defines a Service Directory Service to be used in a BackendService resource.
**/
export declare class ServiceBindingInput extends SpeakeasyBase {
    description?: string;
    labels?: Map<string, string>;
    name?: string;
    service?: string;
}
