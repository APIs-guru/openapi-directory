import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class LocationsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class LocationsRequest extends SpeakeasyBase {
  @Metadata()
  security: LocationsSecurity;
}


export class LocationsResponse extends SpeakeasyBase {
  @Metadata()
  accessDenied?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  locations?: shared.Locations;
}
