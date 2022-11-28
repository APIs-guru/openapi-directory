import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBlobsQueryParams extends SpeakeasyBase {
    after?: Date;
    afterId?: string;
    before?: string;
    beforeId?: string;
    blobKey?: string;
    contentType?: string;
    filename?: string;
    from?: string;
    fromId?: string;
    hash?: string;
    id?: string;
    idOnly?: boolean;
    limit?: number;
    populate?: string;
    resultsOnly?: boolean;
    select?: string;
    sort?: string;
    timeCreated?: string;
    timeLastAccessed?: string;
    timeUpdated?: string;
    timeoutS?: number;
    until?: string;
    untilId?: string;
}
export declare class GetBlobs200ApplicationJson extends SpeakeasyBase {
    count?: number;
    countCurrent?: number;
    isLimited?: boolean;
    nextUrl?: string;
    queryDurationMs?: number;
    results?: shared.Blob[];
    url?: string;
}
export declare class GetBlobsRequest extends SpeakeasyBase {
    queryParams: GetBlobsQueryParams;
}
export declare class GetBlobsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getBlobs200ApplicationJsonObject?: GetBlobs200ApplicationJson;
}
