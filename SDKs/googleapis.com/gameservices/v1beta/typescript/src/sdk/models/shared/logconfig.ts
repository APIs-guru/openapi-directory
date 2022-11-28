import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudAuditOptions } from "./cloudauditoptions";
import { CounterOptions } from "./counteroptions";
import { DataAccessOptions } from "./dataaccessoptions";



// LogConfig
/** 
 * Specifies what kind of log the caller must write
**/
export class LogConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cloudAudit" })
  cloudAudit?: CloudAuditOptions;

  @SpeakeasyMetadata({ data: "json, name=counter" })
  counter?: CounterOptions;

  @SpeakeasyMetadata({ data: "json, name=dataAccess" })
  dataAccess?: DataAccessOptions;
}
