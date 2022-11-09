import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Label } from "./label";


// ModifyLabelsResponse
/** 
 * Response to a ModifyLabels request. This contains only those labels which were added or updated by the request.
**/
export class ModifyLabelsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=modifiedLabels", elemType: shared.Label })
  modifiedLabels?: Label[];
}
