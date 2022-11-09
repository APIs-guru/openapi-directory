import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetMostemailedSectionTimePeriodJsonPathParams extends SpeakeasyBase {
    section: shared.SectionEnum;
    timePeriod: shared.TimePeriodEnum;
}
export declare class GetMostemailedSectionTimePeriodJsonSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetMostemailedSectionTimePeriodJsonRequest extends SpeakeasyBase {
    pathParams: GetMostemailedSectionTimePeriodJsonPathParams;
    security: GetMostemailedSectionTimePeriodJsonSecurity;
}
export declare class GetMostemailedSectionTimePeriodJson200ApplicationJson extends SpeakeasyBase {
    copyright?: string;
    numResults?: number;
    results?: shared.ArticleWithCountType[];
    status?: string;
}
export declare class GetMostemailedSectionTimePeriodJson400ApplicationJson extends SpeakeasyBase {
    copyright?: string;
    errors?: string[];
    results?: any[];
    status?: string;
}
export declare class GetMostemailedSectionTimePeriodJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    getMostemailedSectionTimePeriodJson200ApplicationJsonObject?: GetMostemailedSectionTimePeriodJson200ApplicationJson;
    getMostemailedSectionTimePeriodJson400ApplicationJsonObject?: GetMostemailedSectionTimePeriodJson400ApplicationJson;
    getMostemailedSectionTimePeriodJson403ApplicationJsonObject?: Map<string, any>;
    statusCode: number;
}
