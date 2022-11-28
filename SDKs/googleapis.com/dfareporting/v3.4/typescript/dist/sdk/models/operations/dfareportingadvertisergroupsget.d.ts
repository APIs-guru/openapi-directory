import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingAdvertiserGroupsGetPathParams extends SpeakeasyBase {
    id: string;
    profileId: string;
}
export declare class DfareportingAdvertiserGroupsGetQueryParams extends SpeakeasyBase {
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
export declare class DfareportingAdvertiserGroupsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingAdvertiserGroupsGetRequest extends SpeakeasyBase {
    pathParams: DfareportingAdvertiserGroupsGetPathParams;
    queryParams: DfareportingAdvertiserGroupsGetQueryParams;
    security: DfareportingAdvertiserGroupsGetSecurity;
}
export declare class DfareportingAdvertiserGroupsGetResponse extends SpeakeasyBase {
    advertiserGroup?: shared.AdvertiserGroup;
    contentType: string;
    statusCode: number;
}
