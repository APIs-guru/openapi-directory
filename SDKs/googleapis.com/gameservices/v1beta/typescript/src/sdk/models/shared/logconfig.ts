import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CloudAuditOptions } from "./cloudauditoptions";
import { CounterOptions } from "./counteroptions";
import { DataAccessOptions } from "./dataaccessoptions";


// LogConfig
/** 
 * Specifies what kind of log the caller must write
**/
export class LogConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=cloudAudit" })
  cloudAudit?: CloudAuditOptions;

  @Metadata({ data: "json, name=counter" })
  counter?: CounterOptions;

  @Metadata({ data: "json, name=dataAccess" })
  dataAccess?: DataAccessOptions;
}
