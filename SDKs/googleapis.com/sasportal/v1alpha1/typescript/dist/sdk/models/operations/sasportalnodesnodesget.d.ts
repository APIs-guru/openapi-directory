import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SasportalNodesNodesGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class SasportalNodesNodesGetQueryParams extends SpeakeasyBase {
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
export declare class SasportalNodesNodesGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SasportalNodesNodesGetRequest extends SpeakeasyBase {
    pathParams: SasportalNodesNodesGetPathParams;
    queryParams: SasportalNodesNodesGetQueryParams;
    security: SasportalNodesNodesGetSecurity;
}
export declare class SasportalNodesNodesGetResponse extends SpeakeasyBase {
    contentType: string;
    sasPortalNode?: shared.SasPortalNode;
    statusCode: number;
}
