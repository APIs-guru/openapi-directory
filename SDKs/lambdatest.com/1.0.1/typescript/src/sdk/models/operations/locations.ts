import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class LocationsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class LocationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: LocationsSecurity;
}


export class LocationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDenied?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  locations?: shared.Locations;
}
