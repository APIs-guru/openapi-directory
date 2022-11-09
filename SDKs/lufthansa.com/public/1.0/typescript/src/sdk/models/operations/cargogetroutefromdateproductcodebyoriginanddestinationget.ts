import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum {
    Fan = "FAN"
,    Fco = "FCO"
,    Fcp = "FCP"
,    Fdg = "FDG"
,    Ftf = "FTF"
,    Fun = "FUN"
,    Fwn = "FWN"
,    Yco = "YCO"
,    Ycp = "YCP"
,    Ydg = "YDG"
,    Ynb = "YNB"
,    Ynz = "YNZ"
,    Ytf = "YTF"
,    Yun = "YUN"
,    Zxb = "ZXB"
,    Zxf = "ZXF"
,    Zxr = "ZXR"
}


export class CargoGetRouteFromDateProductCodeByOriginAndDestinationGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=destination" })
  destination: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=fromDate" })
  fromDate: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=origin" })
  origin: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=productCode" })
  productCode: CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum;
}


export class CargoGetRouteFromDateProductCodeByOriginAndDestinationGetHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;
}


export class CargoGetRouteFromDateProductCodeByOriginAndDestinationGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  auth: shared.SchemeAuth;
}


export class CargoGetRouteFromDateProductCodeByOriginAndDestinationGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CargoGetRouteFromDateProductCodeByOriginAndDestinationGetPathParams;

  @Metadata()
  headers: CargoGetRouteFromDateProductCodeByOriginAndDestinationGetHeaders;

  @Metadata()
  security: CargoGetRouteFromDateProductCodeByOriginAndDestinationGetSecurity;
}


export class CargoGetRouteFromDateProductCodeByOriginAndDestinationGetResponse extends SpeakeasyBase {
  @Metadata()
  cargoGetRouteFromDateProductCodeByOriginAndDestinationGet200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
