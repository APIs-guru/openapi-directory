import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CargoShipmentTrackingByAwbPrefixAndAwbNumberGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=aWBNumber" })
  aWbNumber: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=aWBPrefix" })
  aWbPrefix: string;
}


export class CargoShipmentTrackingByAwbPrefixAndAwbNumberGetHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;
}


export class CargoShipmentTrackingByAwbPrefixAndAwbNumberGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  auth: shared.SchemeAuth;
}


export class CargoShipmentTrackingByAwbPrefixAndAwbNumberGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CargoShipmentTrackingByAwbPrefixAndAwbNumberGetPathParams;

  @Metadata()
  headers: CargoShipmentTrackingByAwbPrefixAndAwbNumberGetHeaders;

  @Metadata()
  security: CargoShipmentTrackingByAwbPrefixAndAwbNumberGetSecurity;
}


export class CargoShipmentTrackingByAwbPrefixAndAwbNumberGetResponse extends SpeakeasyBase {
  @Metadata()
  cargoShipmentTrackingByAwbPrefixAndAwbNumberGet200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
