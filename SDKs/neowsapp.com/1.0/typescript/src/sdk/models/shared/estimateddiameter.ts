import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EstimatedDiameter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=estimated_diameter_max" })
  estimatedDiameterMax?: number;

  @SpeakeasyMetadata({ data: "json, name=estimated_diameter_min" })
  estimatedDiameterMin?: number;
}
