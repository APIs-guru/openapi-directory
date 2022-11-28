import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingTargetableRemarketingListsGetPathParams extends SpeakeasyBase {
    id: string;
    profileId: string;
}
export declare class DfareportingTargetableRemarketingListsGetQueryParams extends SpeakeasyBase {
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
export declare class DfareportingTargetableRemarketingListsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingTargetableRemarketingListsGetRequest extends SpeakeasyBase {
    pathParams: DfareportingTargetableRemarketingListsGetPathParams;
    queryParams: DfareportingTargetableRemarketingListsGetQueryParams;
    security: DfareportingTargetableRemarketingListsGetSecurity;
}
export declare class DfareportingTargetableRemarketingListsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    targetableRemarketingList?: shared.TargetableRemarketingList;
}
