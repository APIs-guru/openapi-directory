import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingRemarketingListSharesGetPathParams extends SpeakeasyBase {
    profileId: string;
    remarketingListId: string;
}
export declare class DfareportingRemarketingListSharesGetQueryParams extends SpeakeasyBase {
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
export declare class DfareportingRemarketingListSharesGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingRemarketingListSharesGetRequest extends SpeakeasyBase {
    pathParams: DfareportingRemarketingListSharesGetPathParams;
    queryParams: DfareportingRemarketingListSharesGetQueryParams;
    security: DfareportingRemarketingListSharesGetSecurity;
}
export declare class DfareportingRemarketingListSharesGetResponse extends SpeakeasyBase {
    contentType: string;
    remarketingListShare?: shared.RemarketingListShare;
    statusCode: number;
}
