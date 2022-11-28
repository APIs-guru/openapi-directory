import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSpotsQueryParams extends SpeakeasyBase {
    after?: Date;
    afterId?: string;
    before?: string;
    beforeId?: string;
    from?: string;
    fromId?: string;
    id?: string;
    idOnly?: boolean;
    isOnline?: boolean;
    limit?: number;
    populate?: string;
    requestCounter?: number;
    resultsOnly?: boolean;
    select?: string;
    serialNumber?: number;
    sort?: string;
    timeCreated?: string;
    timeUpdated?: string;
    timeoutS?: number;
    until?: string;
    untilId?: string;
}
export declare class GetSpots200ApplicationJson extends SpeakeasyBase {
    count?: number;
    countCurrent?: number;
    isLimited?: boolean;
    nextUrl?: string;
    queryDurationMs?: number;
    results?: shared.SpotGet[];
    url?: string;
}
export declare class GetSpotsRequest extends SpeakeasyBase {
    queryParams: GetSpotsQueryParams;
}
export declare class GetSpotsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getSpots200ApplicationJsonObject?: GetSpots200ApplicationJson;
}
