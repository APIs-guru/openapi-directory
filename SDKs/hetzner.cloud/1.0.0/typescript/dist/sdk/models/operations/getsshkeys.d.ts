import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetSshKeysSortEnum {
    Id = "id",
    IdAsc = "id:asc",
    IdDesc = "id:desc",
    Name = "name",
    NameAsc = "name:asc",
    NameDesc = "name:desc"
}
export declare class GetSshKeysQueryParams extends SpeakeasyBase {
    fingerprint?: string;
    labelSelector?: string;
    name?: string;
    sort?: GetSshKeysSortEnum;
}
export declare class GetSshKeys200ApplicationJsonMetaPagination extends SpeakeasyBase {
    lastPage: number;
    nextPage: number;
    page: number;
    perPage: number;
    previousPage: number;
    totalEntries: number;
}
export declare class GetSshKeys200ApplicationJsonMeta extends SpeakeasyBase {
    pagination: GetSshKeys200ApplicationJsonMetaPagination;
}
export declare class GetSshKeys200ApplicationJsonSshKeys extends SpeakeasyBase {
    created: string;
    fingerprint: string;
    id: number;
    labels: Map<string, string>;
    name: string;
    publicKey: string;
}
export declare class GetSshKeys200ApplicationJson extends SpeakeasyBase {
    meta?: GetSshKeys200ApplicationJsonMeta;
    sshKeys: GetSshKeys200ApplicationJsonSshKeys[];
}
export declare class GetSshKeysRequest extends SpeakeasyBase {
    queryParams: GetSshKeysQueryParams;
}
export declare class GetSshKeysResponse extends SpeakeasyBase {
    contentType: string;
    getSshKeys200ApplicationJsonObject?: GetSshKeys200ApplicationJson;
    statusCode: number;
}
