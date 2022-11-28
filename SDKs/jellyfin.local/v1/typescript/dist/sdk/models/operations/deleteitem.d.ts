import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteItemPathParams extends SpeakeasyBase {
    itemId: string;
}
export declare class DeleteItemSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class DeleteItemRequest extends SpeakeasyBase {
    pathParams: DeleteItemPathParams;
    security: DeleteItemSecurity;
}
export declare class DeleteItemResponse extends SpeakeasyBase {
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
