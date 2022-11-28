import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VariantFields } from "./variantfields";



export class Variant extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=variant" })
  variant?: VariantFields;
}
