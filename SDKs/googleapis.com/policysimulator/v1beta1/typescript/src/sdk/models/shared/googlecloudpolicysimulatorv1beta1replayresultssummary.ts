import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeDate } from "./googletypedate";



// GoogleCloudPolicysimulatorV1beta1ReplayResultsSummary
/** 
 * Summary statistics about the replayed log entries.
**/
export class GoogleCloudPolicysimulatorV1beta1ReplayResultsSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=differenceCount" })
  differenceCount?: number;

  @SpeakeasyMetadata({ data: "json, name=errorCount" })
  errorCount?: number;

  @SpeakeasyMetadata({ data: "json, name=logCount" })
  logCount?: number;

  @SpeakeasyMetadata({ data: "json, name=newestDate" })
  newestDate?: GoogleTypeDate;

  @SpeakeasyMetadata({ data: "json, name=oldestDate" })
  oldestDate?: GoogleTypeDate;

  @SpeakeasyMetadata({ data: "json, name=unchangedCount" })
  unchangedCount?: number;
}
