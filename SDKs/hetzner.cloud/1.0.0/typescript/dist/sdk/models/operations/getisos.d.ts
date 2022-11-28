import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetIsosQueryParams extends SpeakeasyBase {
    name?: string;
}
export declare enum GetIsos200ApplicationJsonIsosTypeEnum {
    Public = "public",
    Private = "private"
}
export declare class GetIsos200ApplicationJsonIsos extends SpeakeasyBase {
    deprecated: string;
    description: string;
    id: number;
    name: string;
    type: GetIsos200ApplicationJsonIsosTypeEnum;
}
export declare class GetIsos200ApplicationJsonMetaPagination extends SpeakeasyBase {
    lastPage: number;
    nextPage: number;
    page: number;
    perPage: number;
    previousPage: number;
    totalEntries: number;
}
export declare class GetIsos200ApplicationJsonMeta extends SpeakeasyBase {
    pagination: GetIsos200ApplicationJsonMetaPagination;
}
export declare class GetIsos200ApplicationJson extends SpeakeasyBase {
    isos: GetIsos200ApplicationJsonIsos[];
    meta?: GetIsos200ApplicationJsonMeta;
}
export declare class GetIsosRequest extends SpeakeasyBase {
    queryParams: GetIsosQueryParams;
}
export declare class GetIsosResponse extends SpeakeasyBase {
    contentType: string;
    getIsos200ApplicationJsonObject?: GetIsos200ApplicationJson;
    statusCode: number;
}
