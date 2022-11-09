import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AmpInspectionResult } from "./ampinspectionresult";
import { IndexStatusInspectionResult } from "./indexstatusinspectionresult";
import { MobileUsabilityInspectionResult } from "./mobileusabilityinspectionresult";
import { RichResultsInspectionResult } from "./richresultsinspectionresult";


// UrlInspectionResult
/** 
 * URL inspection result, including all inspection results.
**/
export class UrlInspectionResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=ampResult" })
  ampResult?: AmpInspectionResult;

  @Metadata({ data: "json, name=indexStatusResult" })
  indexStatusResult?: IndexStatusInspectionResult;

  @Metadata({ data: "json, name=inspectionResultLink" })
  inspectionResultLink?: string;

  @Metadata({ data: "json, name=mobileUsabilityResult" })
  mobileUsabilityResult?: MobileUsabilityInspectionResult;

  @Metadata({ data: "json, name=richResultsResult" })
  richResultsResult?: RichResultsInspectionResult;
}
