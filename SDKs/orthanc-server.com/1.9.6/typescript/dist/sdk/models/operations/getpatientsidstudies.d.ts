import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetPatientsIdStudiesPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetPatientsIdStudiesQueryParams extends SpeakeasyBase {
    full?: boolean;
    short?: boolean;
}
export declare class GetPatientsIdStudiesRequest extends SpeakeasyBase {
    pathParams: GetPatientsIdStudiesPathParams;
    queryParams: GetPatientsIdStudiesQueryParams;
}
export declare class GetPatientsIdStudiesResponse extends SpeakeasyBase {
    contentType: string;
    getPatientsIdStudies200ApplicationJsonAny?: any;
    statusCode: number;
}
