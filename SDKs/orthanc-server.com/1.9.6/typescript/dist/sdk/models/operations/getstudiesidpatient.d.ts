import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetStudiesIdPatientPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetStudiesIdPatientQueryParams extends SpeakeasyBase {
    full?: boolean;
    short?: boolean;
}
export declare class GetStudiesIdPatientRequest extends SpeakeasyBase {
    pathParams: GetStudiesIdPatientPathParams;
    queryParams: GetStudiesIdPatientQueryParams;
}
export declare class GetStudiesIdPatientResponse extends SpeakeasyBase {
    contentType: string;
    getStudiesIdPatient200ApplicationJsonAny?: any;
    statusCode: number;
}
