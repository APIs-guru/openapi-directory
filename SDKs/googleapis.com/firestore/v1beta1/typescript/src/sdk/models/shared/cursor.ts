import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Value } from "./value";



// Cursor
/** 
 * A position in a query result set.
**/
export class Cursor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=before" })
  before?: boolean;

  @SpeakeasyMetadata({ data: "json, name=values", elemType: Value })
  values?: Value[];
}
