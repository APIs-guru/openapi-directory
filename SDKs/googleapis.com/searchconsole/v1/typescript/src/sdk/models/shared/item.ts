import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RichResultsIssue } from "./richresultsissue";



// Item
/** 
 * A specific rich result found on the page.
**/
export class Item extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=issues", elemType: RichResultsIssue })
  issues?: RichResultsIssue[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
