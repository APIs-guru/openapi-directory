import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Location } from "./location";
import { GeoCoords } from "./geocoords";



export class SpotGetAntennaReportLocations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=antenna_number" })
  antennaNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=report_location" })
  reportLocation?: Location;

  @SpeakeasyMetadata({ data: "json, name=report_location_id" })
  reportLocationId?: string;

  @SpeakeasyMetadata({ data: "json, name=report_location_url" })
  reportLocationUrl?: string;
}


export class SpotGet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=antenna_report_locations", elemType: SpotGetAntennaReportLocations })
  antennaReportLocations?: SpotGetAntennaReportLocations[];

  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=config_request" })
  configRequest?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=geo_coords" })
  geoCoords?: GeoCoords;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=is_online" })
  isOnline?: boolean;

  @SpeakeasyMetadata({ data: "json, name=request_counter" })
  requestCounter?: number;

  @SpeakeasyMetadata({ data: "json, name=senses" })
  senses?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=senses_request" })
  sensesRequest?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=serial_number" })
  serialNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: any;

  @SpeakeasyMetadata({ data: "json, name=time_created" })
  timeCreated?: string;

  @SpeakeasyMetadata({ data: "json, name=time_updated" })
  timeUpdated?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
