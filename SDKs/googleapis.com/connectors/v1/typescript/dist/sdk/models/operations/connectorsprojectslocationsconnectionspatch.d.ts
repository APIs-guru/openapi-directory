import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConnectorsProjectsLocationsConnectionsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ConnectorsProjectsLocationsConnectionsPatchQueryParams extends SpeakeasyBase {
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
export declare class ConnectorsProjectsLocationsConnectionsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ConnectorsProjectsLocationsConnectionsPatchRequest extends SpeakeasyBase {
    pathParams: ConnectorsProjectsLocationsConnectionsPatchPathParams;
    queryParams: ConnectorsProjectsLocationsConnectionsPatchQueryParams;
    request?: shared.ConnectionInput;
    security: ConnectorsProjectsLocationsConnectionsPatchSecurity;
}
export declare class ConnectorsProjectsLocationsConnectionsPatchResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
