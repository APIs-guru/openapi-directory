import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoFirstAndThirdPartyAudiencesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    advertiserId?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    partnerId?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DisplayvideoFirstAndThirdPartyAudiencesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoFirstAndThirdPartyAudiencesListRequest extends SpeakeasyBase {
    queryParams: DisplayvideoFirstAndThirdPartyAudiencesListQueryParams;
    security: DisplayvideoFirstAndThirdPartyAudiencesListSecurity;
}
export declare class DisplayvideoFirstAndThirdPartyAudiencesListResponse extends SpeakeasyBase {
    contentType: string;
    listFirstAndThirdPartyAudiencesResponse?: shared.ListFirstAndThirdPartyAudiencesResponse;
    statusCode: number;
}
