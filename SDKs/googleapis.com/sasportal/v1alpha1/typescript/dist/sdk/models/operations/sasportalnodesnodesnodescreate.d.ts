import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SasportalNodesNodesNodesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class SasportalNodesNodesNodesCreateQueryParams extends SpeakeasyBase {
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
export declare class SasportalNodesNodesNodesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SasportalNodesNodesNodesCreateRequest extends SpeakeasyBase {
    pathParams: SasportalNodesNodesNodesCreatePathParams;
    queryParams: SasportalNodesNodesNodesCreateQueryParams;
    request?: shared.SasPortalNode;
    security: SasportalNodesNodesNodesCreateSecurity;
}
export declare class SasportalNodesNodesNodesCreateResponse extends SpeakeasyBase {
    contentType: string;
    sasPortalNode?: shared.SasPortalNode;
    statusCode: number;
}
