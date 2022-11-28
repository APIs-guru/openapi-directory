import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmFrontendsEventbusProtoEventParameters } from "./enterprisecrmfrontendseventbusprotoeventparameters";



// EnterpriseCrmFrontendsEventbusProtoRollbackStrategy
/** 
 * Next available id: 4
**/
export class EnterpriseCrmFrontendsEventbusProtoRollbackStrategy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters?: EnterpriseCrmFrontendsEventbusProtoEventParameters;

  @SpeakeasyMetadata({ data: "json, name=rollbackTaskImplementationClassName" })
  rollbackTaskImplementationClassName?: string;

  @SpeakeasyMetadata({ data: "json, name=taskNumbersToRollback" })
  taskNumbersToRollback?: string[];
}
