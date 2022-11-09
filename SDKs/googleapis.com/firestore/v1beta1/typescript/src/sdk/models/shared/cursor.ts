import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Value } from "./value";


// Cursor
/** 
 * A position in a query result set.
**/
export class Cursor extends SpeakeasyBase {
  @Metadata({ data: "json, name=before" })
  before?: boolean;

  @Metadata({ data: "json, name=values", elemType: shared.Value })
  values?: Value[];
}
