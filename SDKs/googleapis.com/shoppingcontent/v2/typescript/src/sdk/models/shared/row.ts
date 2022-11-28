import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Value } from "./value";



export class Row extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cells", elemType: Value })
  cells?: Value[];
}
