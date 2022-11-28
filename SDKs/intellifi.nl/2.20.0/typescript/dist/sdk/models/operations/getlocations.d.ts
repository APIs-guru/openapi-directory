import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLocationsQueryParams extends SpeakeasyBase {
    after?: Date;
    afterId?: string;
    before?: string;
    beforeId?: string;
    from?: string;
    fromId?: string;
    id?: string;
    idOnly?: boolean;
    label?: string;
    limit?: number;
    metadata?: string;
    populate?: string;
    resultsOnly?: boolean;
    select?: string;
    sort?: string;
    text?: string;
    timeCreated?: string;
    timeUpdated?: string;
    timeoutS?: number;
    until?: string;
    untilId?: string;
}
export declare class GetLocations200ApplicationJson extends SpeakeasyBase {
    count?: number;
    countCurrent?: number;
    isLimited?: boolean;
    nextUrl?: string;
    queryDurationMs?: number;
    results?: shared.Location[];
    url?: string;
}
export declare class GetLocationsRequest extends SpeakeasyBase {
    queryParams: GetLocationsQueryParams;
}
export declare class GetLocationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getLocations200ApplicationJsonObject?: GetLocations200ApplicationJson;
}
