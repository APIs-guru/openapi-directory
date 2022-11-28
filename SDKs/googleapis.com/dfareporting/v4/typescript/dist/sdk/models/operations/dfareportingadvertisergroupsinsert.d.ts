import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingAdvertiserGroupsInsertPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingAdvertiserGroupsInsertQueryParams extends SpeakeasyBase {
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
export declare class DfareportingAdvertiserGroupsInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingAdvertiserGroupsInsertRequest extends SpeakeasyBase {
    pathParams: DfareportingAdvertiserGroupsInsertPathParams;
    queryParams: DfareportingAdvertiserGroupsInsertQueryParams;
    request?: shared.AdvertiserGroup;
    security: DfareportingAdvertiserGroupsInsertSecurity;
}
export declare class DfareportingAdvertiserGroupsInsertResponse extends SpeakeasyBase {
    advertiserGroup?: shared.AdvertiserGroup;
    contentType: string;
    statusCode: number;
}
