import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AmpInspectionResult } from "./ampinspectionresult";
import { IndexStatusInspectionResult } from "./indexstatusinspectionresult";
import { MobileUsabilityInspectionResult } from "./mobileusabilityinspectionresult";
import { RichResultsInspectionResult } from "./richresultsinspectionresult";



// UrlInspectionResult
/** 
 * URL inspection result, including all inspection results.
**/
export class UrlInspectionResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ampResult" })
  ampResult?: AmpInspectionResult;

  @SpeakeasyMetadata({ data: "json, name=indexStatusResult" })
  indexStatusResult?: IndexStatusInspectionResult;

  @SpeakeasyMetadata({ data: "json, name=inspectionResultLink" })
  inspectionResultLink?: string;

  @SpeakeasyMetadata({ data: "json, name=mobileUsabilityResult" })
  mobileUsabilityResult?: MobileUsabilityInspectionResult;

  @SpeakeasyMetadata({ data: "json, name=richResultsResult" })
  richResultsResult?: RichResultsInspectionResult;
}
