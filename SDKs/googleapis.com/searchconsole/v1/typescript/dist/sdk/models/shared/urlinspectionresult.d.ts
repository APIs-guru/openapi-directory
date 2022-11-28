import { SpeakeasyBase } from "../../../internal/utils";
import { AmpInspectionResult } from "./ampinspectionresult";
import { IndexStatusInspectionResult } from "./indexstatusinspectionresult";
import { MobileUsabilityInspectionResult } from "./mobileusabilityinspectionresult";
import { RichResultsInspectionResult } from "./richresultsinspectionresult";
/**
 * URL inspection result, including all inspection results.
**/
export declare class UrlInspectionResult extends SpeakeasyBase {
    ampResult?: AmpInspectionResult;
    indexStatusResult?: IndexStatusInspectionResult;
    inspectionResultLink?: string;
    mobileUsabilityResult?: MobileUsabilityInspectionResult;
    richResultsResult?: RichResultsInspectionResult;
}
