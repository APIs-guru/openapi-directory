import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentRegionsGetPathParams extends SpeakeasyBase {
    merchantId: string;
    regionId: string;
}
export declare class ContentRegionsGetQueryParams extends SpeakeasyBase {
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
export declare class ContentRegionsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentRegionsGetRequest extends SpeakeasyBase {
    pathParams: ContentRegionsGetPathParams;
    queryParams: ContentRegionsGetQueryParams;
    security: ContentRegionsGetSecurity;
}
export declare class ContentRegionsGetResponse extends SpeakeasyBase {
    contentType: string;
    region?: shared.Region;
    statusCode: number;
}
