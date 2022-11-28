import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteItemsQueryParams extends SpeakeasyBase {
    ids?: string[];
}
export declare class DeleteItemsSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class DeleteItemsRequest extends SpeakeasyBase {
    queryParams: DeleteItemsQueryParams;
    security: DeleteItemsSecurity;
}
export declare class DeleteItemsResponse extends SpeakeasyBase {
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
