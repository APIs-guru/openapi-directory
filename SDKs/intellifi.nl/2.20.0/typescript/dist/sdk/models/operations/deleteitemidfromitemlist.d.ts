import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteItemIdFromItemListPathParams extends SpeakeasyBase {
    id: string;
    itemId: string;
}
export declare class DeleteItemIdFromItemListRequest extends SpeakeasyBase {
    pathParams: DeleteItemIdFromItemListPathParams;
}
export declare class DeleteItemIdFromItemListResponse extends SpeakeasyBase {
    contentType: string;
    responseListResource?: shared.ResponseListResource;
    statusCode: number;
}
