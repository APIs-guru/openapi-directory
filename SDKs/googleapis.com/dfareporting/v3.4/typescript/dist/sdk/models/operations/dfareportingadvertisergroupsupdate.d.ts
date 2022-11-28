import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingAdvertiserGroupsUpdatePathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingAdvertiserGroupsUpdateQueryParams extends SpeakeasyBase {
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
export declare class DfareportingAdvertiserGroupsUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingAdvertiserGroupsUpdateRequest extends SpeakeasyBase {
    pathParams: DfareportingAdvertiserGroupsUpdatePathParams;
    queryParams: DfareportingAdvertiserGroupsUpdateQueryParams;
    request?: shared.AdvertiserGroup;
    security: DfareportingAdvertiserGroupsUpdateSecurity;
}
export declare class DfareportingAdvertiserGroupsUpdateResponse extends SpeakeasyBase {
    advertiserGroup?: shared.AdvertiserGroup;
    contentType: string;
    statusCode: number;
}
