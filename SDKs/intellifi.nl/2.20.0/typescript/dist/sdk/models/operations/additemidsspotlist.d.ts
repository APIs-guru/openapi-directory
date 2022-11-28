import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddItemIdsSpotListPathParams extends SpeakeasyBase {
    id: string;
}
export declare class AddItemIdsSpotListRequest extends SpeakeasyBase {
    pathParams: AddItemIdsSpotListPathParams;
    request: string[];
}
export declare class AddItemIdsSpotListResponse extends SpeakeasyBase {
    contentType: string;
    responseListResource?: shared.ResponseListResource;
    statusCode: number;
}
