import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetModalitiesQueryParams extends SpeakeasyBase {
    expand?: string;
}
export declare class GetModalitiesRequest extends SpeakeasyBase {
    queryParams: GetModalitiesQueryParams;
}
export declare class GetModalitiesResponse extends SpeakeasyBase {
    contentType: string;
    getModalities200ApplicationJsonAny?: any;
    statusCode: number;
}
