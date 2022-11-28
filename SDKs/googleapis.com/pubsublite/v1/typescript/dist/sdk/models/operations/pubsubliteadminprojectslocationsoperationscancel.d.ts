import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PubsubliteAdminProjectsLocationsOperationsCancelPathParams extends SpeakeasyBase {
    name: string;
}
export declare class PubsubliteAdminProjectsLocationsOperationsCancelQueryParams extends SpeakeasyBase {
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
export declare class PubsubliteAdminProjectsLocationsOperationsCancelSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubliteAdminProjectsLocationsOperationsCancelRequest extends SpeakeasyBase {
    pathParams: PubsubliteAdminProjectsLocationsOperationsCancelPathParams;
    queryParams: PubsubliteAdminProjectsLocationsOperationsCancelQueryParams;
    request?: Map<string, any>;
    security: PubsubliteAdminProjectsLocationsOperationsCancelSecurity;
}
export declare class PubsubliteAdminProjectsLocationsOperationsCancelResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
