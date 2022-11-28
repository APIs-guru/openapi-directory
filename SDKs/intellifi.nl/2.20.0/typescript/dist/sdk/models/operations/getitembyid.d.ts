import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetItemByIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetItemByIdRequest extends SpeakeasyBase {
    pathParams: GetItemByIdPathParams;
}
export declare class GetItemByIdResponse extends SpeakeasyBase {
    contentType: string;
    item?: shared.Item;
    statusCode: number;
}
