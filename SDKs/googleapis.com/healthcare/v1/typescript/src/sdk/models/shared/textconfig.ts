import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InfoTypeTransformation } from "./infotypetransformation";



export class TextConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=transformations", elemType: InfoTypeTransformation })
  transformations?: InfoTypeTransformation[];
}
