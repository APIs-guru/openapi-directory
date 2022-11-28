import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MoveItemPathParams extends SpeakeasyBase {
    itemId: string;
    newIndex: number;
    playlistId: string;
}
export declare class MoveItemSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class MoveItemRequest extends SpeakeasyBase {
    pathParams: MoveItemPathParams;
    security: MoveItemSecurity;
}
export declare class MoveItemResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
