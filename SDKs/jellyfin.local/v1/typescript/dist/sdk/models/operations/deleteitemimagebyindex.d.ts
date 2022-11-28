import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteItemImageByIndexPathParams extends SpeakeasyBase {
    imageIndex: number;
    imageType: shared.ImageTypeEnum;
    itemId: string;
}
export declare class DeleteItemImageByIndexSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class DeleteItemImageByIndexRequest extends SpeakeasyBase {
    pathParams: DeleteItemImageByIndexPathParams;
    security: DeleteItemImageByIndexSecurity;
}
export declare class DeleteItemImageByIndexResponse extends SpeakeasyBase {
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
