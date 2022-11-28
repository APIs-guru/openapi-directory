import { SpeakeasyBase } from "../../../internal/utils";
import { Operation } from "./operation";
/**
 * Request for creating an operation
**/
export declare class CreateOperationRequest extends SpeakeasyBase {
    operation?: Operation;
    operationId?: string;
}
