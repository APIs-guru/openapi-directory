import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SasportalNodesNodesDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class SasportalNodesNodesDeleteQueryParams extends SpeakeasyBase {
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
export declare class SasportalNodesNodesDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SasportalNodesNodesDeleteRequest extends SpeakeasyBase {
    pathParams: SasportalNodesNodesDeletePathParams;
    queryParams: SasportalNodesNodesDeleteQueryParams;
    security: SasportalNodesNodesDeleteSecurity;
}
export declare class SasportalNodesNodesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    sasPortalEmpty?: Map<string, any>;
    statusCode: number;
}
