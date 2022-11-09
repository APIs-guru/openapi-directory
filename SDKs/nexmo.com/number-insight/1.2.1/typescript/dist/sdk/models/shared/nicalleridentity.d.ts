import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum NiCallerIdentityCallerTypeEnum {
    Business = "business",
    Consumer = "consumer",
    Unknown = "unknown"
}
/**
 * Information about the network `number` is currently connected to.
**/
export declare class NiCallerIdentity extends SpeakeasyBase {
    callerName?: string;
    callerType?: NiCallerIdentityCallerTypeEnum;
    firstName?: string;
    lastName?: string;
}
