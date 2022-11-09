import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetContentSourceSectionTimePeriodJsonSourceEnum {
    All = "all",
    Nyt = "nyt",
    Iht = "iht"
}
export declare class GetContentSourceSectionTimePeriodJsonPathParams extends SpeakeasyBase {
    section: string;
    source: GetContentSourceSectionTimePeriodJsonSourceEnum;
    timePeriod: number;
}
export declare class GetContentSourceSectionTimePeriodJsonQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
}
export declare class GetContentSourceSectionTimePeriodJsonRequest extends SpeakeasyBase {
    pathParams: GetContentSourceSectionTimePeriodJsonPathParams;
    queryParams: GetContentSourceSectionTimePeriodJsonQueryParams;
}
export declare class GetContentSourceSectionTimePeriodJson200ApplicationJson extends SpeakeasyBase {
    copyright?: string;
    numResults?: number;
    results?: shared.Article[];
    status?: string;
}
export declare class GetContentSourceSectionTimePeriodJsonResponse extends SpeakeasyBase {
    contentType: string;
    getContentSourceSectionTimePeriodJson200ApplicationJsonObject?: GetContentSourceSectionTimePeriodJson200ApplicationJson;
    statusCode: number;
}
