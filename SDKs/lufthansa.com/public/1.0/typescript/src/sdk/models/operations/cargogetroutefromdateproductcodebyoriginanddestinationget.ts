import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum {
    Fan = "FAN",
    Fco = "FCO",
    Fcp = "FCP",
    Fdg = "FDG",
    Ftf = "FTF",
    Fun = "FUN",
    Fwn = "FWN",
    Yco = "YCO",
    Ycp = "YCP",
    Ydg = "YDG",
    Ynb = "YNB",
    Ynz = "YNZ",
    Ytf = "YTF",
    Yun = "YUN",
    Zxb = "ZXB",
    Zxf = "ZXF",
    Zxr = "ZXR"
}


export class CargoGetRouteFromDateProductCodeByOriginAndDestinationGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=destination" })
  destination: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fromDate" })
  fromDate: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=origin" })
  origin: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=productCode" })
  productCode: CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum;
}


export class CargoGetRouteFromDateProductCodeByOriginAndDestinationGetHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;
}


export class CargoGetRouteFromDateProductCodeByOriginAndDestinationGetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  auth: shared.SchemeAuth;
}


export class CargoGetRouteFromDateProductCodeByOriginAndDestinationGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CargoGetRouteFromDateProductCodeByOriginAndDestinationGetPathParams;

  @SpeakeasyMetadata()
  headers: CargoGetRouteFromDateProductCodeByOriginAndDestinationGetHeaders;

  @SpeakeasyMetadata()
  security: CargoGetRouteFromDateProductCodeByOriginAndDestinationGetSecurity;
}


export class CargoGetRouteFromDateProductCodeByOriginAndDestinationGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cargoGetRouteFromDateProductCodeByOriginAndDestinationGet200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
