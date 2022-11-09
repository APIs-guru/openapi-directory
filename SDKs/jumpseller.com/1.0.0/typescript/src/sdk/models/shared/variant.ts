import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VariantFields } from "./variantfields";


export class Variant extends SpeakeasyBase {
  @Metadata({ data: "json, name=variant" })
  variant?: VariantFields;
}
