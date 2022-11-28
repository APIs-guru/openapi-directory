import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMostsharedSectionTimePeriodJsonPathParams extends SpeakeasyBase {
    section: shared.SectionEnum;
    timePeriod: shared.TimePeriodEnum;
}
export declare class GetMostsharedSectionTimePeriodJsonSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetMostsharedSectionTimePeriodJson200ApplicationJson extends SpeakeasyBase {
    copyright?: string;
    numResults?: number;
    results?: shared.Article[];
    status?: string;
}
export declare class GetMostsharedSectionTimePeriodJson400ApplicationJson extends SpeakeasyBase {
    copyright?: string;
    errors?: string[];
    results?: any[];
    status?: string;
}
export declare class GetMostsharedSectionTimePeriodJsonRequest extends SpeakeasyBase {
    pathParams: GetMostsharedSectionTimePeriodJsonPathParams;
    security: GetMostsharedSectionTimePeriodJsonSecurity;
}
export declare class GetMostsharedSectionTimePeriodJsonResponse extends SpeakeasyBase {
    contentType: string;
    getMostsharedSectionTimePeriodJson200ApplicationJsonObject?: GetMostsharedSectionTimePeriodJson200ApplicationJson;
    getMostsharedSectionTimePeriodJson400ApplicationJsonObject?: GetMostsharedSectionTimePeriodJson400ApplicationJson;
    statusCode: number;
}
