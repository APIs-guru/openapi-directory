import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Label } from "./label";


// LabelList
/** 
 * A list of labels.
**/
export class LabelList extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.Label })
  items?: Label[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
