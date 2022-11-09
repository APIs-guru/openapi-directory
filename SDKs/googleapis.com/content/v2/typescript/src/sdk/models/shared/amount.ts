import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Price } from "./price";
import { Price } from "./price";


export class Amount extends SpeakeasyBase {
  @Metadata({ data: "json, name=pretax" })
  pretax?: Price;

  @Metadata({ data: "json, name=tax" })
  tax?: Price;
}
