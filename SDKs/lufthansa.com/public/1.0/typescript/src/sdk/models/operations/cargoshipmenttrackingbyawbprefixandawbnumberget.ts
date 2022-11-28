import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CargoShipmentTrackingByAwbPrefixAndAwbNumberGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=aWBNumber" })
  aWbNumber: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=aWBPrefix" })
  aWbPrefix: string;
}


export class CargoShipmentTrackingByAwbPrefixAndAwbNumberGetHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;
}


export class CargoShipmentTrackingByAwbPrefixAndAwbNumberGetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  auth: shared.SchemeAuth;
}


export class CargoShipmentTrackingByAwbPrefixAndAwbNumberGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CargoShipmentTrackingByAwbPrefixAndAwbNumberGetPathParams;

  @SpeakeasyMetadata()
  headers: CargoShipmentTrackingByAwbPrefixAndAwbNumberGetHeaders;

  @SpeakeasyMetadata()
  security: CargoShipmentTrackingByAwbPrefixAndAwbNumberGetSecurity;
}


export class CargoShipmentTrackingByAwbPrefixAndAwbNumberGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cargoShipmentTrackingByAwbPrefixAndAwbNumberGet200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
