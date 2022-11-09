import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UrlInspectionResult } from "./urlinspectionresult";


// InspectUrlIndexResponse
/** 
 * Index-Status inspection response.
**/
export class InspectUrlIndexResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=inspectionResult" })
  inspectionResult?: UrlInspectionResult;
}
