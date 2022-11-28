import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VariantOptionProperties } from "./variantoptionproperties";



export class VariantOptionDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=properties", elemType: VariantOptionProperties })
  properties: VariantOptionProperties[];
}
