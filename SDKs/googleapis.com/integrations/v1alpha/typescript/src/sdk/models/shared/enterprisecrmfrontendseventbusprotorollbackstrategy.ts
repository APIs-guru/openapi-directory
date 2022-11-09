import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EnterpriseCrmFrontendsEventbusProtoEventParameters } from "./enterprisecrmfrontendseventbusprotoeventparameters";


// EnterpriseCrmFrontendsEventbusProtoRollbackStrategy
/** 
 * Next available id: 4
**/
export class EnterpriseCrmFrontendsEventbusProtoRollbackStrategy extends SpeakeasyBase {
  @Metadata({ data: "json, name=parameters" })
  parameters?: EnterpriseCrmFrontendsEventbusProtoEventParameters;

  @Metadata({ data: "json, name=rollbackTaskImplementationClassName" })
  rollbackTaskImplementationClassName?: string;

  @Metadata({ data: "json, name=taskNumbersToRollback" })
  taskNumbersToRollback?: string[];
}
