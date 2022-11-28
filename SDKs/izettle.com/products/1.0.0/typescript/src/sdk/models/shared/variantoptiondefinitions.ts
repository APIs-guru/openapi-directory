import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VariantOptionDefinition } from "./variantoptiondefinition";



export class VariantOptionDefinitions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=definitions", elemType: VariantOptionDefinition })
  definitions: VariantOptionDefinition[];
}
