import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SasportalNodesNodesMovePathParams extends SpeakeasyBase {
    name: string;
}
export declare class SasportalNodesNodesMoveQueryParams extends SpeakeasyBase {
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
export declare class SasportalNodesNodesMoveSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SasportalNodesNodesMoveRequest extends SpeakeasyBase {
    pathParams: SasportalNodesNodesMovePathParams;
    queryParams: SasportalNodesNodesMoveQueryParams;
    request?: shared.SasPortalMoveNodeRequest;
    security: SasportalNodesNodesMoveSecurity;
}
export declare class SasportalNodesNodesMoveResponse extends SpeakeasyBase {
    contentType: string;
    sasPortalOperation?: shared.SasPortalOperation;
    statusCode: number;
}
