import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LithologyDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=lithology_colour" })
  lithologyColour?: string;

  @Metadata({ data: "json, name=lithology_from" })
  lithologyFrom?: string;

  @Metadata({ data: "json, name=lithology_hardness" })
  lithologyHardness?: string;

  @Metadata({ data: "json, name=lithology_moisture" })
  lithologyMoisture?: string;

  @Metadata({ data: "json, name=lithology_raw_data" })
  lithologyRawData?: string;

  @Metadata({ data: "json, name=lithology_to" })
  lithologyTo?: string;

  @Metadata({ data: "json, name=water_bearing_estimated_flow" })
  waterBearingEstimatedFlow?: string;
}
