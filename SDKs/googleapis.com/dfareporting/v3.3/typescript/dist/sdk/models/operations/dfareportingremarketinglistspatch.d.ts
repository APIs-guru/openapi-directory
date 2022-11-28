import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingRemarketingListsPatchPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingRemarketingListsPatchQueryParams extends SpeakeasyBase {
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
export declare class DfareportingRemarketingListsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingRemarketingListsPatchRequest extends SpeakeasyBase {
    pathParams: DfareportingRemarketingListsPatchPathParams;
    queryParams: DfareportingRemarketingListsPatchQueryParams;
    request?: shared.RemarketingList;
    security: DfareportingRemarketingListsPatchSecurity;
}
export declare class DfareportingRemarketingListsPatchResponse extends SpeakeasyBase {
    contentType: string;
    remarketingList?: shared.RemarketingList;
    statusCode: number;
}
