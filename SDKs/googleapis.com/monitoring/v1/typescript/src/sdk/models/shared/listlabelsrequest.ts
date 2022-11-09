import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListLabelsRequest
/** 
 * ListLabelsRequest holds all parameters of the Prometheus upstream API for returning a list of label names.
**/
export class ListLabelsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=end" })
  end?: string;

  @Metadata({ data: "json, name=match" })
  match?: string;

  @Metadata({ data: "json, name=start" })
  start?: string;
}
