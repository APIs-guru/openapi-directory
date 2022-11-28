import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LithologyDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lithology_colour" })
  lithologyColour?: string;

  @SpeakeasyMetadata({ data: "json, name=lithology_from" })
  lithologyFrom?: string;

  @SpeakeasyMetadata({ data: "json, name=lithology_hardness" })
  lithologyHardness?: string;

  @SpeakeasyMetadata({ data: "json, name=lithology_moisture" })
  lithologyMoisture?: string;

  @SpeakeasyMetadata({ data: "json, name=lithology_raw_data" })
  lithologyRawData?: string;

  @SpeakeasyMetadata({ data: "json, name=lithology_to" })
  lithologyTo?: string;

  @SpeakeasyMetadata({ data: "json, name=water_bearing_estimated_flow" })
  waterBearingEstimatedFlow?: string;
}
