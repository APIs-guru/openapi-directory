import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateItemImageIndexPathParams extends SpeakeasyBase {
    imageIndex: number;
    imageType: shared.ImageTypeEnum;
    itemId: string;
}
export declare class UpdateItemImageIndexQueryParams extends SpeakeasyBase {
    newIndex?: number;
}
export declare class UpdateItemImageIndexSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class UpdateItemImageIndexRequest extends SpeakeasyBase {
    pathParams: UpdateItemImageIndexPathParams;
    queryParams: UpdateItemImageIndexQueryParams;
    security: UpdateItemImageIndexSecurity;
}
export declare class UpdateItemImageIndexResponse extends SpeakeasyBase {
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
