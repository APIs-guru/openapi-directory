import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateItemPathParams extends SpeakeasyBase {
    id: string;
}
export declare class UpdateItemRequest extends SpeakeasyBase {
    pathParams: UpdateItemPathParams;
    request: shared.ItemUpdate;
}
export declare class UpdateItemResponse extends SpeakeasyBase {
    contentType: string;
    responseDefaultResource?: shared.ResponseDefaultResource;
    statusCode: number;
}
