import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingFloodlightActivitiesInsertPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingFloodlightActivitiesInsertQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DfareportingFloodlightActivitiesInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingFloodlightActivitiesInsertRequest extends SpeakeasyBase {
    pathParams: DfareportingFloodlightActivitiesInsertPathParams;
    queryParams: DfareportingFloodlightActivitiesInsertQueryParams;
    request?: shared.FloodlightActivity;
    security: DfareportingFloodlightActivitiesInsertSecurity;
}
export declare class DfareportingFloodlightActivitiesInsertResponse extends SpeakeasyBase {
    contentType: string;
    floodlightActivity?: shared.FloodlightActivity;
    statusCode: number;
}
