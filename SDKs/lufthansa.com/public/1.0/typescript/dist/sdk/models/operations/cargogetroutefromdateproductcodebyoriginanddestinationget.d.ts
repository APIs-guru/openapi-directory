import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum {
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
export declare class CargoGetRouteFromDateProductCodeByOriginAndDestinationGetPathParams extends SpeakeasyBase {
    destination: string;
    fromDate: string;
    origin: string;
    productCode: CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum;
}
export declare class CargoGetRouteFromDateProductCodeByOriginAndDestinationGetHeaders extends SpeakeasyBase {
    accept: string;
}
export declare class CargoGetRouteFromDateProductCodeByOriginAndDestinationGetSecurity extends SpeakeasyBase {
    auth: shared.SchemeAuth;
}
export declare class CargoGetRouteFromDateProductCodeByOriginAndDestinationGetRequest extends SpeakeasyBase {
    pathParams: CargoGetRouteFromDateProductCodeByOriginAndDestinationGetPathParams;
    headers: CargoGetRouteFromDateProductCodeByOriginAndDestinationGetHeaders;
    security: CargoGetRouteFromDateProductCodeByOriginAndDestinationGetSecurity;
}
export declare class CargoGetRouteFromDateProductCodeByOriginAndDestinationGetResponse extends SpeakeasyBase {
    cargoGetRouteFromDateProductCodeByOriginAndDestinationGet200ApplicationJsonObject?: Map<string, any>;
    contentType: string;
    statusCode: number;
}
