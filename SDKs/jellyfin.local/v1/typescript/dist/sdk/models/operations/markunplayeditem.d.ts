import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MarkUnplayedItemPathParams extends SpeakeasyBase {
    itemId: string;
    userId: string;
}
export declare class MarkUnplayedItemSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class MarkUnplayedItemRequest extends SpeakeasyBase {
    pathParams: MarkUnplayedItemPathParams;
    security: MarkUnplayedItemSecurity;
}
export declare class MarkUnplayedItemResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userItemDataDto?: shared.UserItemDataDto;
}
