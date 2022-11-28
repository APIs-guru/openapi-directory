import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetItemListIdsByIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetItemListIdsByIdRequest extends SpeakeasyBase {
    pathParams: GetItemListIdsByIdPathParams;
}
export declare class GetItemListIdsByIdResponse extends SpeakeasyBase {
    contentType: string;
    listOfItemIds?: string[];
    statusCode: number;
}
