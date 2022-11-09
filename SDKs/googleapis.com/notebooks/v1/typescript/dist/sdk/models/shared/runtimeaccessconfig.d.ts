import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum RuntimeAccessConfigAccessTypeEnum {
    RuntimeAccessTypeUnspecified = "RUNTIME_ACCESS_TYPE_UNSPECIFIED",
    SingleUser = "SINGLE_USER",
    ServiceAccount = "SERVICE_ACCOUNT"
}
/**
 * Specifies the login configuration for Runtime
**/
export declare class RuntimeAccessConfig extends SpeakeasyBase {
    accessType?: RuntimeAccessConfigAccessTypeEnum;
    proxyUri?: string;
    runtimeOwner?: string;
}
