import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListLabelsRequest
/** 
 * ListLabelsRequest holds all parameters of the Prometheus upstream API for returning a list of label names.
**/
export class ListLabelsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end" })
  end?: string;

  @SpeakeasyMetadata({ data: "json, name=match" })
  match?: string;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: string;
}
