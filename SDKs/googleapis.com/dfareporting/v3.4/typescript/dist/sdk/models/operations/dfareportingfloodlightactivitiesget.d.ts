import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingFloodlightActivitiesGetPathParams extends SpeakeasyBase {
    id: string;
    profileId: string;
}
export declare class DfareportingFloodlightActivitiesGetQueryParams extends SpeakeasyBase {
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
export declare class DfareportingFloodlightActivitiesGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingFloodlightActivitiesGetRequest extends SpeakeasyBase {
    pathParams: DfareportingFloodlightActivitiesGetPathParams;
    queryParams: DfareportingFloodlightActivitiesGetQueryParams;
    security: DfareportingFloodlightActivitiesGetSecurity;
}
export declare class DfareportingFloodlightActivitiesGetResponse extends SpeakeasyBase {
    contentType: string;
    floodlightActivity?: shared.FloodlightActivity;
    statusCode: number;
}
