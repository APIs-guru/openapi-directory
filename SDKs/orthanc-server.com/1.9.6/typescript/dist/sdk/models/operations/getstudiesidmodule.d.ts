import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetStudiesIdModulePathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetStudiesIdModuleQueryParams extends SpeakeasyBase {
    ignoreLength?: string[];
    short?: boolean;
    simplify?: boolean;
}
export declare class GetStudiesIdModuleRequest extends SpeakeasyBase {
    pathParams: GetStudiesIdModulePathParams;
    queryParams: GetStudiesIdModuleQueryParams;
}
export declare class GetStudiesIdModuleResponse extends SpeakeasyBase {
    contentType: string;
    getStudiesIdModule200ApplicationJsonAny?: any;
    statusCode: number;
}
