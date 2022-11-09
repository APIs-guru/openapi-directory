import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResultDisplayField } from "./resultdisplayfield";


// ResultDisplayLine
/** 
 * The collection of fields that make up a displayed line
**/
export class ResultDisplayLine extends SpeakeasyBase {
  @Metadata({ data: "json, name=fields", elemType: shared.ResultDisplayField })
  fields?: ResultDisplayField[];
}
