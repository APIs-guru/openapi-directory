import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SetItemImageByIndexPathParams extends SpeakeasyBase {
    imageIndex: number;
    imageType: shared.ImageTypeEnum;
    itemId: string;
}
export declare class SetItemImageByIndexSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class SetItemImageByIndexRequest extends SpeakeasyBase {
    pathParams: SetItemImageByIndexPathParams;
    security: SetItemImageByIndexSecurity;
}
export declare class SetItemImageByIndexResponse extends SpeakeasyBase {
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
