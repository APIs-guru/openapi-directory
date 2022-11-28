import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClouddeployProjectsLocationsOperationsCancelPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ClouddeployProjectsLocationsOperationsCancelQueryParams extends SpeakeasyBase {
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
export declare class ClouddeployProjectsLocationsOperationsCancelSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClouddeployProjectsLocationsOperationsCancelRequest extends SpeakeasyBase {
    pathParams: ClouddeployProjectsLocationsOperationsCancelPathParams;
    queryParams: ClouddeployProjectsLocationsOperationsCancelQueryParams;
    request?: Map<string, any>;
    security: ClouddeployProjectsLocationsOperationsCancelSecurity;
}
export declare class ClouddeployProjectsLocationsOperationsCancelResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
