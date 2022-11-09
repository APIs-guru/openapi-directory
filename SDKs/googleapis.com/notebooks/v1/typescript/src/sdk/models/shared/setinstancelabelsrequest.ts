import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SetInstanceLabelsRequest
/** 
 * Request for setting instance labels.
**/
export class SetInstanceLabelsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;
}
