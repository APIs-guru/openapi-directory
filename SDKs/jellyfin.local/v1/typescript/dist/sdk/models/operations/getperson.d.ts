import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPersonPathParams extends SpeakeasyBase {
    name: string;
}
export declare class GetPersonQueryParams extends SpeakeasyBase {
    userId?: string;
}
export declare class GetPersonSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetPersonRequest extends SpeakeasyBase {
    pathParams: GetPersonPathParams;
    queryParams: GetPersonQueryParams;
    security: GetPersonSecurity;
}
export declare class GetPersonResponse extends SpeakeasyBase {
    baseItemDto?: shared.BaseItemDto;
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
