import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConnectorsProjectsLocationsOperationsCancelPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ConnectorsProjectsLocationsOperationsCancelQueryParams extends SpeakeasyBase {
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
export declare class ConnectorsProjectsLocationsOperationsCancelSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ConnectorsProjectsLocationsOperationsCancelRequest extends SpeakeasyBase {
    pathParams: ConnectorsProjectsLocationsOperationsCancelPathParams;
    queryParams: ConnectorsProjectsLocationsOperationsCancelQueryParams;
    request?: Map<string, any>;
    security: ConnectorsProjectsLocationsOperationsCancelSecurity;
}
export declare class ConnectorsProjectsLocationsOperationsCancelResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
