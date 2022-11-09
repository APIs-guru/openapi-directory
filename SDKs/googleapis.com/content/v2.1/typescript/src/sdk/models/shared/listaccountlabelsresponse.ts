import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AccountLabel } from "./accountlabel";


// ListAccountLabelsResponse
/** 
 * Response message for the `ListAccountLabels` method.
**/
export class ListAccountLabelsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountLabels", elemType: shared.AccountLabel })
  accountLabels?: AccountLabel[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
