import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetPatientsIdModulePathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetPatientsIdModuleQueryParams extends SpeakeasyBase {
    ignoreLength?: string[];
    short?: boolean;
    simplify?: boolean;
}
export declare class GetPatientsIdModuleRequest extends SpeakeasyBase {
    pathParams: GetPatientsIdModulePathParams;
    queryParams: GetPatientsIdModuleQueryParams;
}
export declare class GetPatientsIdModuleResponse extends SpeakeasyBase {
    contentType: string;
    getPatientsIdModule200ApplicationJsonAny?: any;
    statusCode: number;
}
