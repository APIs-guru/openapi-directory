import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SetInstanceLabelsRequest
/** 
 * Request for setting instance labels.
**/
export class SetInstanceLabelsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;
}
