import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentRegionsPatchPathParams extends SpeakeasyBase {
    merchantId: string;
    regionId: string;
}
export declare class ContentRegionsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ContentRegionsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentRegionsPatchRequest extends SpeakeasyBase {
    pathParams: ContentRegionsPatchPathParams;
    queryParams: ContentRegionsPatchQueryParams;
    request?: shared.RegionInput;
    security: ContentRegionsPatchSecurity;
}
export declare class ContentRegionsPatchResponse extends SpeakeasyBase {
    contentType: string;
    region?: shared.Region;
    statusCode: number;
}
