import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAncestorsPathParams extends SpeakeasyBase {
    itemId: string;
}
export declare class GetAncestorsQueryParams extends SpeakeasyBase {
    userId?: string;
}
export declare class GetAncestorsSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetAncestorsRequest extends SpeakeasyBase {
    pathParams: GetAncestorsPathParams;
    queryParams: GetAncestorsQueryParams;
    security: GetAncestorsSecurity;
}
export declare class GetAncestorsResponse extends SpeakeasyBase {
    baseItemDtos?: shared.BaseItemDto[];
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
