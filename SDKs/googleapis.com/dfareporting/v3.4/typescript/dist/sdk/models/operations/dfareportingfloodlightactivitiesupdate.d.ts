import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingFloodlightActivitiesUpdatePathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingFloodlightActivitiesUpdateQueryParams extends SpeakeasyBase {
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
export declare class DfareportingFloodlightActivitiesUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingFloodlightActivitiesUpdateRequest extends SpeakeasyBase {
    pathParams: DfareportingFloodlightActivitiesUpdatePathParams;
    queryParams: DfareportingFloodlightActivitiesUpdateQueryParams;
    request?: shared.FloodlightActivity;
    security: DfareportingFloodlightActivitiesUpdateSecurity;
}
export declare class DfareportingFloodlightActivitiesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    floodlightActivity?: shared.FloodlightActivity;
    statusCode: number;
}
