import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MarkPlayedItemPathParams extends SpeakeasyBase {
    itemId: string;
    userId: string;
}
export declare class MarkPlayedItemQueryParams extends SpeakeasyBase {
    datePlayed?: Date;
}
export declare class MarkPlayedItemSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class MarkPlayedItemRequest extends SpeakeasyBase {
    pathParams: MarkPlayedItemPathParams;
    queryParams: MarkPlayedItemQueryParams;
    security: MarkPlayedItemSecurity;
}
export declare class MarkPlayedItemResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userItemDataDto?: shared.UserItemDataDto;
}
