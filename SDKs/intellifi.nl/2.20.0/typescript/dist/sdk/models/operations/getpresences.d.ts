import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPresencesQueryParams extends SpeakeasyBase {
    after?: Date;
    afterId?: string;
    before?: string;
    beforeId?: string;
    from?: string;
    fromId?: string;
    id?: string;
    idOnly?: boolean;
    item?: string;
    limit?: number;
    location?: string;
    populate?: string;
    proximity?: shared.ProximityEnum;
    resultsOnly?: boolean;
    select?: string;
    sort?: string;
    technology?: shared.TechnologyEnum;
    timeCreated?: string;
    timeUpdated?: string;
    timeoutS?: number;
    until?: string;
    untilId?: string;
}
export declare class GetPresences200ApplicationJson extends SpeakeasyBase {
    count?: number;
    countCurrent?: number;
    isLimited?: boolean;
    nextUrl?: string;
    queryDurationMs?: number;
    results?: shared.Presence[];
    url?: string;
}
export declare class GetPresencesRequest extends SpeakeasyBase {
    queryParams: GetPresencesQueryParams;
}
export declare class GetPresencesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getPresences200ApplicationJsonObject?: GetPresences200ApplicationJson;
}
