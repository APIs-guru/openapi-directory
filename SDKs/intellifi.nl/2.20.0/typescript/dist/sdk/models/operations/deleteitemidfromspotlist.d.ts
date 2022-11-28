import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteItemIdFromSpotListPathParams extends SpeakeasyBase {
    id: string;
    itemId: string;
}
export declare class DeleteItemIdFromSpotListRequest extends SpeakeasyBase {
    pathParams: DeleteItemIdFromSpotListPathParams;
}
export declare class DeleteItemIdFromSpotListResponse extends SpeakeasyBase {
    contentType: string;
    responseListResource?: shared.ResponseListResource;
    statusCode: number;
}
