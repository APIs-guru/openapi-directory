import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EstimatedDiameter extends SpeakeasyBase {
  @Metadata({ data: "json, name=estimated_diameter_max" })
  estimatedDiameterMax?: number;

  @Metadata({ data: "json, name=estimated_diameter_min" })
  estimatedDiameterMin?: number;
}
