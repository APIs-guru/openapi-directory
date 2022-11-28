import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddItemListRequest extends SpeakeasyBase {
    request: shared.ItemListInput;
}
export declare class AddItemListResponse extends SpeakeasyBase {
    contentType: string;
    responseDefaultResource?: shared.ResponseDefaultResource;
    statusCode: number;
}
