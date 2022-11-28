import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingRemarketingListsGetPathParams extends SpeakeasyBase {
    id: string;
    profileId: string;
}
export declare class DfareportingRemarketingListsGetQueryParams extends SpeakeasyBase {
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
export declare class DfareportingRemarketingListsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingRemarketingListsGetRequest extends SpeakeasyBase {
    pathParams: DfareportingRemarketingListsGetPathParams;
    queryParams: DfareportingRemarketingListsGetQueryParams;
    security: DfareportingRemarketingListsGetSecurity;
}
export declare class DfareportingRemarketingListsGetResponse extends SpeakeasyBase {
    contentType: string;
    remarketingList?: shared.RemarketingList;
    statusCode: number;
}
