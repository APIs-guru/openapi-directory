import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InconclusiveDetail
/** 
 * Details for an outcome with an INCONCLUSIVE outcome summary.
**/
export class InconclusiveDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=abortedByUser" })
  abortedByUser?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hasErrorLogs" })
  hasErrorLogs?: boolean;

  @SpeakeasyMetadata({ data: "json, name=infrastructureFailure" })
  infrastructureFailure?: boolean;
}
