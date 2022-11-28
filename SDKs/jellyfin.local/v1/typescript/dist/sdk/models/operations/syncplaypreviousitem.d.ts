import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SyncPlayPreviousItemRequests extends SpeakeasyBase {
    previousItemRequestDto?: shared.PreviousItemRequestDto;
    previousItemRequestDto1?: shared.PreviousItemRequestDto;
    previousItemRequestDto2?: shared.PreviousItemRequestDto;
}
export declare class SyncPlayPreviousItemSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class SyncPlayPreviousItemRequest extends SpeakeasyBase {
    request: SyncPlayPreviousItemRequests;
    security: SyncPlayPreviousItemSecurity;
}
export declare class SyncPlayPreviousItemResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
