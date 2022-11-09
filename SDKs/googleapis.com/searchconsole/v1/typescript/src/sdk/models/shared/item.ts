import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RichResultsIssue } from "./richresultsissue";


// Item
/** 
 * A specific rich result found on the page.
**/
export class Item extends SpeakeasyBase {
  @Metadata({ data: "json, name=issues", elemType: shared.RichResultsIssue })
  issues?: RichResultsIssue[];

  @Metadata({ data: "json, name=name" })
  name?: string;
}
