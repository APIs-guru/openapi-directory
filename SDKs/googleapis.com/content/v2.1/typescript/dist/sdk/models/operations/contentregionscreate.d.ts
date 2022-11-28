import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentRegionsCreatePathParams extends SpeakeasyBase {
    merchantId: string;
}
export declare class ContentRegionsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    regionId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ContentRegionsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentRegionsCreateRequest extends SpeakeasyBase {
    pathParams: ContentRegionsCreatePathParams;
    queryParams: ContentRegionsCreateQueryParams;
    request?: shared.RegionInput;
    security: ContentRegionsCreateSecurity;
}
export declare class ContentRegionsCreateResponse extends SpeakeasyBase {
    contentType: string;
    region?: shared.Region;
    statusCode: number;
}
