import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentDatafeedstatusesGetPathParams extends SpeakeasyBase {
    datafeedId: string;
    merchantId: string;
}
export declare class ContentDatafeedstatusesGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    country?: string;
    fields?: string;
    key?: string;
    language?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ContentDatafeedstatusesGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentDatafeedstatusesGetRequest extends SpeakeasyBase {
    pathParams: ContentDatafeedstatusesGetPathParams;
    queryParams: ContentDatafeedstatusesGetQueryParams;
    security: ContentDatafeedstatusesGetSecurity;
}
export declare class ContentDatafeedstatusesGetResponse extends SpeakeasyBase {
    contentType: string;
    datafeedStatus?: shared.DatafeedStatus;
    statusCode: number;
}
