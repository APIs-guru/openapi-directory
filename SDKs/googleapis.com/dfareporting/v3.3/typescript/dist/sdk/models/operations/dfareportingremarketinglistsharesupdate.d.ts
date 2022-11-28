import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingRemarketingListSharesUpdatePathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingRemarketingListSharesUpdateQueryParams extends SpeakeasyBase {
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
export declare class DfareportingRemarketingListSharesUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingRemarketingListSharesUpdateRequest extends SpeakeasyBase {
    pathParams: DfareportingRemarketingListSharesUpdatePathParams;
    queryParams: DfareportingRemarketingListSharesUpdateQueryParams;
    request?: shared.RemarketingListShare;
    security: DfareportingRemarketingListSharesUpdateSecurity;
}
export declare class DfareportingRemarketingListSharesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    remarketingListShare?: shared.RemarketingListShare;
    statusCode: number;
}
