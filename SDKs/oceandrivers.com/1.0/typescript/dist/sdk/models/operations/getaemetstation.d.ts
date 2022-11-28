import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAemetStationPathParams extends SpeakeasyBase {
    period: string;
    stationName: string;
}
export declare class GetAemetStationRequest extends SpeakeasyBase {
    pathParams: GetAemetStationPathParams;
}
export declare class GetAemetStationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
