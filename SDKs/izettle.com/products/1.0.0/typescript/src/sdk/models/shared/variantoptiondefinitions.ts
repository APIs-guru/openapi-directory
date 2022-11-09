import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { VariantOptionDefinition } from "./variantoptiondefinition";


export class VariantOptionDefinitions extends SpeakeasyBase {
  @Metadata({ data: "json, name=definitions", elemType: shared.VariantOptionDefinition })
  definitions: VariantOptionDefinition[];
}
