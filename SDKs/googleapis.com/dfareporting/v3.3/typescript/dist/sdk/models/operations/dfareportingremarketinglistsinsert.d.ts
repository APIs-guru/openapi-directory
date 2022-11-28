import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingRemarketingListsInsertPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingRemarketingListsInsertQueryParams extends SpeakeasyBase {
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
export declare class DfareportingRemarketingListsInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingRemarketingListsInsertRequest extends SpeakeasyBase {
    pathParams: DfareportingRemarketingListsInsertPathParams;
    queryParams: DfareportingRemarketingListsInsertQueryParams;
    request?: shared.RemarketingList;
    security: DfareportingRemarketingListsInsertSecurity;
}
export declare class DfareportingRemarketingListsInsertResponse extends SpeakeasyBase {
    contentType: string;
    remarketingList?: shared.RemarketingList;
    statusCode: number;
}
