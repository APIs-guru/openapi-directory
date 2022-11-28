import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddItemRequest extends SpeakeasyBase {
    request: shared.ItemInput;
}
export declare class AddItemResponse extends SpeakeasyBase {
    contentType: string;
    responseDefaultResource?: shared.ResponseDefaultResource;
    statusCode: number;
}
