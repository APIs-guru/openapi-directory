import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SyncPlayNextItemRequests extends SpeakeasyBase {
    nextItemRequestDto?: shared.NextItemRequestDto;
    nextItemRequestDto1?: shared.NextItemRequestDto;
    nextItemRequestDto2?: shared.NextItemRequestDto;
}
export declare class SyncPlayNextItemSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class SyncPlayNextItemRequest extends SpeakeasyBase {
    request: SyncPlayNextItemRequests;
    security: SyncPlayNextItemSecurity;
}
export declare class SyncPlayNextItemResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
