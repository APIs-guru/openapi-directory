import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddItemIdsListPathParams extends SpeakeasyBase {
    id: string;
}
export declare class AddItemIdsListRequest extends SpeakeasyBase {
    pathParams: AddItemIdsListPathParams;
    request: string[];
}
export declare class AddItemIdsListResponse extends SpeakeasyBase {
    contentType: string;
    responseListResource?: shared.ResponseListResource;
    statusCode: number;
}
