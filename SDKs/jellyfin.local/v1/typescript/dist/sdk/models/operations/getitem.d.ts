import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetItemPathParams extends SpeakeasyBase {
    itemId: string;
    userId: string;
}
export declare class GetItemSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetItemRequest extends SpeakeasyBase {
    pathParams: GetItemPathParams;
    security: GetItemSecurity;
}
export declare class GetItemResponse extends SpeakeasyBase {
    baseItemDto?: shared.BaseItemDto;
    contentType: string;
    statusCode: number;
}
