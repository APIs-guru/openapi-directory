import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetSeriesIdPatientPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSeriesIdPatientQueryParams extends SpeakeasyBase {
    full?: boolean;
    short?: boolean;
}
export declare class GetSeriesIdPatientRequest extends SpeakeasyBase {
    pathParams: GetSeriesIdPatientPathParams;
    queryParams: GetSeriesIdPatientQueryParams;
}
export declare class GetSeriesIdPatientResponse extends SpeakeasyBase {
    contentType: string;
    getSeriesIdPatient200ApplicationJsonAny?: any;
    statusCode: number;
}
