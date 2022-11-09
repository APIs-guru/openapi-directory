import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InconclusiveDetail
/** 
 * Details for an outcome with an INCONCLUSIVE outcome summary.
**/
export class InconclusiveDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=abortedByUser" })
  abortedByUser?: boolean;

  @Metadata({ data: "json, name=hasErrorLogs" })
  hasErrorLogs?: boolean;

  @Metadata({ data: "json, name=infrastructureFailure" })
  infrastructureFailure?: boolean;
}
