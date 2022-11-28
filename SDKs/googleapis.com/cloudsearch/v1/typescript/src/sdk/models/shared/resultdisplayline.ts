import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResultDisplayField } from "./resultdisplayfield";



// ResultDisplayLine
/** 
 * The collection of fields that make up a displayed line
**/
export class ResultDisplayLine extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fields", elemType: ResultDisplayField })
  fields?: ResultDisplayField[];
}
