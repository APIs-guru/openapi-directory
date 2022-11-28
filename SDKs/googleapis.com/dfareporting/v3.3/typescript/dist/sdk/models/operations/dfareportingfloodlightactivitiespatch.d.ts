import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingFloodlightActivitiesPatchPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingFloodlightActivitiesPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    id: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DfareportingFloodlightActivitiesPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingFloodlightActivitiesPatchRequest extends SpeakeasyBase {
    pathParams: DfareportingFloodlightActivitiesPatchPathParams;
    queryParams: DfareportingFloodlightActivitiesPatchQueryParams;
    request?: shared.FloodlightActivity;
    security: DfareportingFloodlightActivitiesPatchSecurity;
}
export declare class DfareportingFloodlightActivitiesPatchResponse extends SpeakeasyBase {
    contentType: string;
    floodlightActivity?: shared.FloodlightActivity;
    statusCode: number;
}
