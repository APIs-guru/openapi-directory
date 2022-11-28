import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GeoCoordsInput } from "./geocoords";



export class SpotUpdateAntennaReportLocationsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=antenna_number" })
  antennaNumber?: number;
}


export class SpotUpdateInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=antenna_report_locations", elemType: SpotUpdateAntennaReportLocationsInput })
  antennaReportLocations?: SpotUpdateAntennaReportLocationsInput[];

  @SpeakeasyMetadata({ data: "json, name=config_request" })
  configRequest?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=geo_coords" })
  geoCoords?: GeoCoordsInput;

  @SpeakeasyMetadata({ data: "json, name=report_location" })
  reportLocation?: string;

  @SpeakeasyMetadata({ data: "json, name=senses_request" })
  sensesRequest?: Map<string, any>;
}
