import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Label } from "./label";



// ModifyLabelsResponse
/** 
 * Response to a ModifyLabels request. This contains only those labels which were added or updated by the request.
**/
export class ModifyLabelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=modifiedLabels", elemType: Label })
  modifiedLabels?: Label[];
}
