import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoGoogleAudiencesListQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoGoogleAudiencesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoGoogleAudiencesListRequest extends SpeakeasyBase {
    queryParams: DisplayvideoGoogleAudiencesListQueryParams;
    security: DisplayvideoGoogleAudiencesListSecurity;
}
export declare class DisplayvideoGoogleAudiencesListResponse extends SpeakeasyBase {
    contentType: string;
    listGoogleAudiencesResponse?: shared.ListGoogleAudiencesResponse;
    statusCode: number;
}
