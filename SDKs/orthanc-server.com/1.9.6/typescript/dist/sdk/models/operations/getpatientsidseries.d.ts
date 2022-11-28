import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetPatientsIdSeriesPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetPatientsIdSeriesQueryParams extends SpeakeasyBase {
    full?: boolean;
    short?: boolean;
}
export declare class GetPatientsIdSeriesRequest extends SpeakeasyBase {
    pathParams: GetPatientsIdSeriesPathParams;
    queryParams: GetPatientsIdSeriesQueryParams;
}
export declare class GetPatientsIdSeriesResponse extends SpeakeasyBase {
    contentType: string;
    getPatientsIdSeries200ApplicationJsonAny?: any;
    statusCode: number;
}
