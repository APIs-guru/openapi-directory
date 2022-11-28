import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetSocibWeatherStationPathParams extends SpeakeasyBase {
    period: string;
    stationName: string;
}
export declare class GetSocibWeatherStationRequest extends SpeakeasyBase {
    pathParams: GetSocibWeatherStationPathParams;
}
export declare class GetSocibWeatherStationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
