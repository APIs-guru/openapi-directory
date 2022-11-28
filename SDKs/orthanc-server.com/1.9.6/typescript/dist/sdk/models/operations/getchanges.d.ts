import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetChangesQueryParams extends SpeakeasyBase {
    limit?: number;
    since?: number;
}
export declare class GetChangesRequest extends SpeakeasyBase {
    queryParams: GetChangesQueryParams;
}
export declare class GetChangesResponse extends SpeakeasyBase {
    contentType: string;
    getChanges200ApplicationJsonAny?: any;
    statusCode: number;
}
