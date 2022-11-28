import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VariantEditFields } from "./varianteditfields";



export class VariantEdit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=variant" })
  variant?: VariantEditFields;
}
