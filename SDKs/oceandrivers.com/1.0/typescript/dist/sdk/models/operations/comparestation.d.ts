import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class CompareStationPathParams extends SpeakeasyBase {
    stationName: string;
}
export declare class CompareStationRequest extends SpeakeasyBase {
    pathParams: CompareStationPathParams;
}
export declare class CompareStationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
