import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteItemPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteItemRequest extends SpeakeasyBase {
    pathParams: DeleteItemPathParams;
}
export declare class DeleteItemResponse extends SpeakeasyBase {
    contentType: string;
    responseDefaultResource?: shared.ResponseDefaultResource;
    statusCode: number;
}
