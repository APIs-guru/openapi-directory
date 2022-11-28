import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetItemListByIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetItemListByIdRequest extends SpeakeasyBase {
    pathParams: GetItemListByIdPathParams;
}
export declare class GetItemListByIdResponse extends SpeakeasyBase {
    contentType: string;
    itemList?: shared.ItemList;
    statusCode: number;
}
