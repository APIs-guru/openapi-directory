import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MarkFavoriteItemPathParams extends SpeakeasyBase {
    itemId: string;
    userId: string;
}
export declare class MarkFavoriteItemSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class MarkFavoriteItemRequest extends SpeakeasyBase {
    pathParams: MarkFavoriteItemPathParams;
    security: MarkFavoriteItemSecurity;
}
export declare class MarkFavoriteItemResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userItemDataDto?: shared.UserItemDataDto;
}
