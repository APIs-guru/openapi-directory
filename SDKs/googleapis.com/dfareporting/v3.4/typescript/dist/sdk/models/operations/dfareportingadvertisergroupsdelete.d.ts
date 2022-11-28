import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingAdvertiserGroupsDeletePathParams extends SpeakeasyBase {
    id: string;
    profileId: string;
}
export declare class DfareportingAdvertiserGroupsDeleteQueryParams extends SpeakeasyBase {
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
export declare class DfareportingAdvertiserGroupsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingAdvertiserGroupsDeleteRequest extends SpeakeasyBase {
    pathParams: DfareportingAdvertiserGroupsDeletePathParams;
    queryParams: DfareportingAdvertiserGroupsDeleteQueryParams;
    security: DfareportingAdvertiserGroupsDeleteSecurity;
}
export declare class DfareportingAdvertiserGroupsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
