import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LogMatch
/** 
 * A condition type that checks whether a log message in the scoping project (https://cloud.google.com/monitoring/api/v3#project_name) satisfies the given filter. Logs from other projects in the metrics scope are not evaluated.
**/
export class LogMatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "json, name=labelExtractors" })
  labelExtractors?: Map<string, string>;
}
