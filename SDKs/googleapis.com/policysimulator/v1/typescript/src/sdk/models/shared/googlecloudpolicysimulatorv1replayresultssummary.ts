import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleTypeDate } from "./googletypedate";
import { GoogleTypeDate } from "./googletypedate";


// GoogleCloudPolicysimulatorV1ReplayResultsSummary
/** 
 * Summary statistics about the replayed log entries.
**/
export class GoogleCloudPolicysimulatorV1ReplayResultsSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=differenceCount" })
  differenceCount?: number;

  @Metadata({ data: "json, name=errorCount" })
  errorCount?: number;

  @Metadata({ data: "json, name=logCount" })
  logCount?: number;

  @Metadata({ data: "json, name=newestDate" })
  newestDate?: GoogleTypeDate;

  @Metadata({ data: "json, name=oldestDate" })
  oldestDate?: GoogleTypeDate;

  @Metadata({ data: "json, name=unchangedCount" })
  unchangedCount?: number;
}
