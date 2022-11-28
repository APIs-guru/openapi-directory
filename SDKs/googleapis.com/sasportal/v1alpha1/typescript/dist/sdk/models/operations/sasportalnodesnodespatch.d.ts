import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SasportalNodesNodesPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class SasportalNodesNodesPatchQueryParams extends SpeakeasyBase {
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
export declare class SasportalNodesNodesPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SasportalNodesNodesPatchRequest extends SpeakeasyBase {
    pathParams: SasportalNodesNodesPatchPathParams;
    queryParams: SasportalNodesNodesPatchQueryParams;
    request?: shared.SasPortalNode;
    security: SasportalNodesNodesPatchSecurity;
}
export declare class SasportalNodesNodesPatchResponse extends SpeakeasyBase {
    contentType: string;
    sasPortalNode?: shared.SasPortalNode;
    statusCode: number;
}
