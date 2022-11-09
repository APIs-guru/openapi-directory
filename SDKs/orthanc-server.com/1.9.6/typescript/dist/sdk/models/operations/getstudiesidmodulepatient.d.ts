import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetStudiesIdModulePatientPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetStudiesIdModulePatientQueryParams extends SpeakeasyBase {
    ignoreLength?: string[];
    short?: boolean;
    simplify?: boolean;
}
export declare class GetStudiesIdModulePatientRequest extends SpeakeasyBase {
    pathParams: GetStudiesIdModulePatientPathParams;
    queryParams: GetStudiesIdModulePatientQueryParams;
}
export declare class GetStudiesIdModulePatientResponse extends SpeakeasyBase {
    contentType: string;
    getStudiesIdModulePatient200ApplicationJsonAny?: any;
    statusCode: number;
}
