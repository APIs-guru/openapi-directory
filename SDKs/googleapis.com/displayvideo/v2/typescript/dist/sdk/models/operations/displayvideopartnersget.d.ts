import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoPartnersGetPathParams extends SpeakeasyBase {
    partnerId: string;
}
export declare class DisplayvideoPartnersGetQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoPartnersGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoPartnersGetRequest extends SpeakeasyBase {
    pathParams: DisplayvideoPartnersGetPathParams;
    queryParams: DisplayvideoPartnersGetQueryParams;
    security: DisplayvideoPartnersGetSecurity;
}
export declare class DisplayvideoPartnersGetResponse extends SpeakeasyBase {
    contentType: string;
    partner?: shared.Partner;
    statusCode: number;
}
