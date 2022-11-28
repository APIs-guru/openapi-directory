import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingRemarketingListSharesPatchPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingRemarketingListSharesPatchQueryParams extends SpeakeasyBase {
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
export declare class DfareportingRemarketingListSharesPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingRemarketingListSharesPatchRequest extends SpeakeasyBase {
    pathParams: DfareportingRemarketingListSharesPatchPathParams;
    queryParams: DfareportingRemarketingListSharesPatchQueryParams;
    request?: shared.RemarketingListShare;
    security: DfareportingRemarketingListSharesPatchSecurity;
}
export declare class DfareportingRemarketingListSharesPatchResponse extends SpeakeasyBase {
    contentType: string;
    remarketingListShare?: shared.RemarketingListShare;
    statusCode: number;
}
