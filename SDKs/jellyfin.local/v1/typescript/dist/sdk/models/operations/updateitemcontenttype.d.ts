import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateItemContentTypePathParams extends SpeakeasyBase {
    itemId: string;
}
export declare class UpdateItemContentTypeQueryParams extends SpeakeasyBase {
    contentType?: string;
}
export declare class UpdateItemContentTypeSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class UpdateItemContentTypeRequest extends SpeakeasyBase {
    pathParams: UpdateItemContentTypePathParams;
    queryParams: UpdateItemContentTypeQueryParams;
    security: UpdateItemContentTypeSecurity;
}
export declare class UpdateItemContentTypeResponse extends SpeakeasyBase {
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
