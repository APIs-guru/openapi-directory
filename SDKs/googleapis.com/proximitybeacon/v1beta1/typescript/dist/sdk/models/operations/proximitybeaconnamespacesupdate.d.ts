import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProximitybeaconNamespacesUpdatePathParams extends SpeakeasyBase {
    namespaceName: string;
}
export declare class ProximitybeaconNamespacesUpdateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    projectId?: string;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ProximitybeaconNamespacesUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ProximitybeaconNamespacesUpdateRequest extends SpeakeasyBase {
    pathParams: ProximitybeaconNamespacesUpdatePathParams;
    queryParams: ProximitybeaconNamespacesUpdateQueryParams;
    request?: shared.Namespace;
    security: ProximitybeaconNamespacesUpdateSecurity;
}
export declare class ProximitybeaconNamespacesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    namespace?: shared.Namespace;
    statusCode: number;
}
