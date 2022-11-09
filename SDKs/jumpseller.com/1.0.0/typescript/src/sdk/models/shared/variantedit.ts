import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VariantEditFields } from "./varianteditfields";


export class VariantEdit extends SpeakeasyBase {
  @Metadata({ data: "json, name=variant" })
  variant?: VariantEditFields;
}
