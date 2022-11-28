import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateItemListPathParams extends SpeakeasyBase {
    id: string;
}
export declare class UpdateItemListRequest extends SpeakeasyBase {
    pathParams: UpdateItemListPathParams;
    request: shared.ItemListInput;
}
export declare class UpdateItemListResponse extends SpeakeasyBase {
    contentType: string;
    responseDefaultResource?: shared.ResponseDefaultResource;
    statusCode: number;
}
