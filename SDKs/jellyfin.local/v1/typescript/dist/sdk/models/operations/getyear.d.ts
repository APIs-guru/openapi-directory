import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetYearPathParams extends SpeakeasyBase {
    year: number;
}
export declare class GetYearQueryParams extends SpeakeasyBase {
    userId?: string;
}
export declare class GetYearSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetYearRequest extends SpeakeasyBase {
    pathParams: GetYearPathParams;
    queryParams: GetYearQueryParams;
    security: GetYearSecurity;
}
export declare class GetYearResponse extends SpeakeasyBase {
    baseItemDto?: shared.BaseItemDto;
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
