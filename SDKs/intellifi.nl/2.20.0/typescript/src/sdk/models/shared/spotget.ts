import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Location } from "./location";
import { GeoCoords } from "./geocoords";


export class SpotGetAntennaReportLocations extends SpeakeasyBase {
  @Metadata({ data: "json, name=antenna_number" })
  antennaNumber?: number;

  @Metadata({ data: "json, name=report_location" })
  reportLocation?: Location;

  @Metadata({ data: "json, name=report_location_id" })
  reportLocationId?: string;

  @Metadata({ data: "json, name=report_location_url" })
  reportLocationUrl?: string;
}


export class SpotGet extends SpeakeasyBase {
  @Metadata({ data: "json, name=antenna_report_locations", elemType: shared.SpotGetAntennaReportLocations })
  antennaReportLocations?: SpotGetAntennaReportLocations[];

  @Metadata({ data: "json, name=config" })
  config?: Map<string, any>;

  @Metadata({ data: "json, name=config_request" })
  configRequest?: Map<string, any>;

  @Metadata({ data: "json, name=geo_coords" })
  geoCoords?: GeoCoords;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=is_online" })
  isOnline?: boolean;

  @Metadata({ data: "json, name=request_counter" })
  requestCounter?: number;

  @Metadata({ data: "json, name=senses" })
  senses?: Map<string, any>;

  @Metadata({ data: "json, name=senses_request" })
  sensesRequest?: Map<string, any>;

  @Metadata({ data: "json, name=serial_number" })
  serialNumber?: number;

  @Metadata({ data: "json, name=status" })
  status?: any;

  @Metadata({ data: "json, name=time_created" })
  timeCreated?: string;

  @Metadata({ data: "json, name=time_updated" })
  timeUpdated?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
