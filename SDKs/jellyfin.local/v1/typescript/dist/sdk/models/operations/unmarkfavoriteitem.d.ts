import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UnmarkFavoriteItemPathParams extends SpeakeasyBase {
    itemId: string;
    userId: string;
}
export declare class UnmarkFavoriteItemSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class UnmarkFavoriteItemRequest extends SpeakeasyBase {
    pathParams: UnmarkFavoriteItemPathParams;
    security: UnmarkFavoriteItemSecurity;
}
export declare class UnmarkFavoriteItemResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userItemDataDto?: shared.UserItemDataDto;
}
