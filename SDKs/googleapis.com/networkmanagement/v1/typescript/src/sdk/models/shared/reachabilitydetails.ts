import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Status } from "./status";
import { Trace } from "./trace";

export enum ReachabilityDetailsResultEnum {
    ResultUnspecified = "RESULT_UNSPECIFIED"
,    Reachable = "REACHABLE"
,    Unreachable = "UNREACHABLE"
,    Ambiguous = "AMBIGUOUS"
,    Undetermined = "UNDETERMINED"
}


// ReachabilityDetails
/** 
 * Results of the configuration analysis from the last run of the test.
**/
export class ReachabilityDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Status;

  @Metadata({ data: "json, name=result" })
  result?: ReachabilityDetailsResultEnum;

  @Metadata({ data: "json, name=traces", elemType: shared.Trace })
  traces?: Trace[];

  @Metadata({ data: "json, name=verifyTime" })
  verifyTime?: string;
}
