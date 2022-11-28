import { SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmFrontendsEventbusProtoEventParameters } from "./enterprisecrmfrontendseventbusprotoeventparameters";
/**
 * Next available id: 4
**/
export declare class EnterpriseCrmFrontendsEventbusProtoRollbackStrategy extends SpeakeasyBase {
    parameters?: EnterpriseCrmFrontendsEventbusProtoEventParameters;
    rollbackTaskImplementationClassName?: string;
    taskNumbersToRollback?: string[];
}
