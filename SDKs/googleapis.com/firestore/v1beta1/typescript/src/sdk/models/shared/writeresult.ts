import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Value } from "./value";



// WriteResult
/** 
 * The result of applying a write.
**/
export class WriteResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=transformResults", elemType: Value })
  transformResults?: Value[];

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
