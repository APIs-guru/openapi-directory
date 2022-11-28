import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetSpotListIdsByIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSpotListIdsByIdRequest extends SpeakeasyBase {
    pathParams: GetSpotListIdsByIdPathParams;
}
export declare class GetSpotListIdsByIdResponse extends SpeakeasyBase {
    contentType: string;
    listOfItemIds?: string[];
    statusCode: number;
}
