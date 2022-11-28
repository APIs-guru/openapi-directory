import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RealtimebiddingBuyersUserListsGetRemarketingTagPathParams extends SpeakeasyBase {
    name: string;
}
export declare class RealtimebiddingBuyersUserListsGetRemarketingTagQueryParams extends SpeakeasyBase {
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
export declare class RealtimebiddingBuyersUserListsGetRemarketingTagSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RealtimebiddingBuyersUserListsGetRemarketingTagRequest extends SpeakeasyBase {
    pathParams: RealtimebiddingBuyersUserListsGetRemarketingTagPathParams;
    queryParams: RealtimebiddingBuyersUserListsGetRemarketingTagQueryParams;
    security: RealtimebiddingBuyersUserListsGetRemarketingTagSecurity;
}
export declare class RealtimebiddingBuyersUserListsGetRemarketingTagResponse extends SpeakeasyBase {
    contentType: string;
    getRemarketingTagResponse?: shared.GetRemarketingTagResponse;
    statusCode: number;
}
