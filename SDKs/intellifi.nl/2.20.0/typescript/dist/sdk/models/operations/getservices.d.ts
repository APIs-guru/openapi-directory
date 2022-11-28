import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetServicesQueryParams extends SpeakeasyBase {
    after?: Date;
    afterId?: string;
    before?: string;
    beforeId?: string;
    from?: string;
    fromId?: string;
    id?: string;
    idOnly?: boolean;
    limit?: number;
    name?: string;
    populate?: string;
    resultsOnly?: boolean;
    select?: string;
    sort?: string;
    timeCreated?: string;
    timeUpdated?: string;
    timeoutS?: number;
    until?: string;
    untilId?: string;
}
export declare class GetServices200ApplicationJson extends SpeakeasyBase {
    count?: number;
    countCurrent?: number;
    isLimited?: boolean;
    nextUrl?: string;
    queryDurationMs?: number;
    results?: shared.Service[];
    url?: string;
}
export declare class GetServicesRequest extends SpeakeasyBase {
    queryParams: GetServicesQueryParams;
}
export declare class GetServicesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getServices200ApplicationJsonObject?: GetServices200ApplicationJson;
}
