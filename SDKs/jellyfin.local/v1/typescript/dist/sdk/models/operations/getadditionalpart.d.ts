import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAdditionalPartPathParams extends SpeakeasyBase {
    itemId: string;
}
export declare class GetAdditionalPartQueryParams extends SpeakeasyBase {
    userId?: string;
}
export declare class GetAdditionalPartSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetAdditionalPartRequest extends SpeakeasyBase {
    pathParams: GetAdditionalPartPathParams;
    queryParams: GetAdditionalPartQueryParams;
    security: GetAdditionalPartSecurity;
}
export declare class GetAdditionalPartResponse extends SpeakeasyBase {
    baseItemDtoQueryResult?: shared.BaseItemDtoQueryResult;
    contentType: string;
    statusCode: number;
}
