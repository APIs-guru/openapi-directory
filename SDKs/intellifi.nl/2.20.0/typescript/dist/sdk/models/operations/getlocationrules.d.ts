import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLocationRulesQueryParams extends SpeakeasyBase {
    after?: Date;
    afterId?: string;
    before?: string;
    beforeId?: string;
    enabled?: boolean;
    from?: string;
    fromId?: string;
    id?: string;
    idOnly?: boolean;
    label?: string;
    limit?: number;
    populate?: string;
    resultsOnly?: boolean;
    select?: string;
    sort?: string;
    timeCreated?: string;
    timeUpdated?: string;
    timeoutS?: number;
    type?: shared.LocationRuleTypeEnum;
    until?: string;
    untilId?: string;
}
export declare class GetLocationRules200ApplicationJson extends SpeakeasyBase {
    count?: number;
    countCurrent?: number;
    isLimited?: boolean;
    nextUrl?: string;
    queryDurationMs?: number;
    results?: shared.LocationRule[];
    url?: string;
}
export declare class GetLocationRulesRequest extends SpeakeasyBase {
    queryParams: GetLocationRulesQueryParams;
}
export declare class GetLocationRulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getLocationRules200ApplicationJsonObject?: GetLocationRules200ApplicationJson;
}
