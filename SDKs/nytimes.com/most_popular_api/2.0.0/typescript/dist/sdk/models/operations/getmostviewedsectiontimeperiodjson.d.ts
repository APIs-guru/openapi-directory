import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetMostviewedSectionTimePeriodJsonPathParams extends SpeakeasyBase {
    section: shared.SectionEnum;
    timePeriod: shared.TimePeriodEnum;
}
export declare class GetMostviewedSectionTimePeriodJsonSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetMostviewedSectionTimePeriodJsonRequest extends SpeakeasyBase {
    pathParams: GetMostviewedSectionTimePeriodJsonPathParams;
    security: GetMostviewedSectionTimePeriodJsonSecurity;
}
export declare class GetMostviewedSectionTimePeriodJson200ApplicationJson extends SpeakeasyBase {
    copyright?: string;
    numResults?: number;
    results?: shared.Article[];
    status?: string;
}
export declare class GetMostviewedSectionTimePeriodJsonResponse extends SpeakeasyBase {
    contentType: string;
    getMostviewedSectionTimePeriodJson200ApplicationJsonObject?: GetMostviewedSectionTimePeriodJson200ApplicationJson;
    statusCode: number;
}
