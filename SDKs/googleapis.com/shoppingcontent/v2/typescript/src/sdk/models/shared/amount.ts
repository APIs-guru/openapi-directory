import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";



export class Amount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pretax" })
  pretax?: Price;

  @SpeakeasyMetadata({ data: "json, name=tax" })
  tax?: Price;
}
