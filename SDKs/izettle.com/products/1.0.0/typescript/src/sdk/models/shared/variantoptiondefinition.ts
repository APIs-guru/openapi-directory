import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { VariantOptionProperties } from "./variantoptionproperties";


export class VariantOptionDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=properties", elemType: shared.VariantOptionProperties })
  properties: VariantOptionProperties[];
}
