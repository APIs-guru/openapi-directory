import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Label } from "./label";



// LabelList
/** 
 * A list of labels.
**/
export class LabelList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: Label })
  items?: Label[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
