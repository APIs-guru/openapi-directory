import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetStudioPathParams extends SpeakeasyBase {
    name: string;
}
export declare class GetStudioQueryParams extends SpeakeasyBase {
    userId?: string;
}
export declare class GetStudioSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetStudioRequest extends SpeakeasyBase {
    pathParams: GetStudioPathParams;
    queryParams: GetStudioQueryParams;
    security: GetStudioSecurity;
}
export declare class GetStudioResponse extends SpeakeasyBase {
    baseItemDto?: shared.BaseItemDto;
    contentType: string;
    statusCode: number;
}
