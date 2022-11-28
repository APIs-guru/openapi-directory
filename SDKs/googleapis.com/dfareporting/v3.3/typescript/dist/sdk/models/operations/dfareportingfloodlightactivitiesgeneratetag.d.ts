import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingFloodlightActivitiesGeneratetagPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingFloodlightActivitiesGeneratetagQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    floodlightActivityId?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DfareportingFloodlightActivitiesGeneratetagSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingFloodlightActivitiesGeneratetagRequest extends SpeakeasyBase {
    pathParams: DfareportingFloodlightActivitiesGeneratetagPathParams;
    queryParams: DfareportingFloodlightActivitiesGeneratetagQueryParams;
    security: DfareportingFloodlightActivitiesGeneratetagSecurity;
}
export declare class DfareportingFloodlightActivitiesGeneratetagResponse extends SpeakeasyBase {
    contentType: string;
    floodlightActivitiesGenerateTagResponse?: shared.FloodlightActivitiesGenerateTagResponse;
    statusCode: number;
}
