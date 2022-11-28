import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountLabel } from "./accountlabel";



// ListAccountLabelsResponse
/** 
 * Response message for the `ListAccountLabels` method.
**/
export class ListAccountLabelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountLabels", elemType: AccountLabel })
  accountLabels?: AccountLabel[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
