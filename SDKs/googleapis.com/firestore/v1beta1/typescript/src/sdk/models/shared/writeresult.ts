import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Value } from "./value";


// WriteResult
/** 
 * The result of applying a write.
**/
export class WriteResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=transformResults", elemType: shared.Value })
  transformResults?: Value[];

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
