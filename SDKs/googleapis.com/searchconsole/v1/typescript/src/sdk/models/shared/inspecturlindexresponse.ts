import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UrlInspectionResult } from "./urlinspectionresult";



// InspectUrlIndexResponse
/** 
 * Index-Status inspection response.
**/
export class InspectUrlIndexResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inspectionResult" })
  inspectionResult?: UrlInspectionResult;
}
