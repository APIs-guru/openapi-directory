import { SpeakeasyBase } from "../../../internal/utils";
import { Operation } from "./operation";
/**
 * Request message for the Check method.
**/
export declare class CheckRequest extends SpeakeasyBase {
    operation?: Operation;
    requestProjectSettings?: boolean;
    serviceConfigId?: string;
    skipActivationCheck?: boolean;
}
