import { SpeakeasyBase } from "../../../internal/utils";
import { CloudAuditOptions } from "./cloudauditoptions";
import { CounterOptions } from "./counteroptions";
import { DataAccessOptions } from "./dataaccessoptions";
/**
 * Specifies what kind of log the caller must write
**/
export declare class LogConfig extends SpeakeasyBase {
    cloudAudit?: CloudAuditOptions;
    counter?: CounterOptions;
    dataAccess?: DataAccessOptions;
}
