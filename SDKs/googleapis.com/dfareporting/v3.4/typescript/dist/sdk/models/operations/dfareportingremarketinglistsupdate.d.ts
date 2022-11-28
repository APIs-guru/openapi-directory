import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingRemarketingListsUpdatePathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingRemarketingListsUpdateQueryParams extends SpeakeasyBase {
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
export declare class DfareportingRemarketingListsUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingRemarketingListsUpdateRequest extends SpeakeasyBase {
    pathParams: DfareportingRemarketingListsUpdatePathParams;
    queryParams: DfareportingRemarketingListsUpdateQueryParams;
    request?: shared.RemarketingList;
    security: DfareportingRemarketingListsUpdateSecurity;
}
export declare class DfareportingRemarketingListsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    remarketingList?: shared.RemarketingList;
    statusCode: number;
}
