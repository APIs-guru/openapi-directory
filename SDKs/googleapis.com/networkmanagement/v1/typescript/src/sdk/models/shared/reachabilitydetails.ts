import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";
import { Trace } from "./trace";


export enum ReachabilityDetailsResultEnum {
    ResultUnspecified = "RESULT_UNSPECIFIED",
    Reachable = "REACHABLE",
    Unreachable = "UNREACHABLE",
    Ambiguous = "AMBIGUOUS",
    Undetermined = "UNDETERMINED"
}


// ReachabilityDetails
/** 
 * Results of the configuration analysis from the last run of the test.
**/
export class ReachabilityDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Status;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: ReachabilityDetailsResultEnum;

  @SpeakeasyMetadata({ data: "json, name=traces", elemType: Trace })
  traces?: Trace[];

  @SpeakeasyMetadata({ data: "json, name=verifyTime" })
  verifyTime?: string;
}
