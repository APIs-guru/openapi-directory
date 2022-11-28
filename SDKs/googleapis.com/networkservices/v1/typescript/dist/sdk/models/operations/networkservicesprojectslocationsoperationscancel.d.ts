import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NetworkservicesProjectsLocationsOperationsCancelPathParams extends SpeakeasyBase {
    name: string;
}
export declare class NetworkservicesProjectsLocationsOperationsCancelQueryParams extends SpeakeasyBase {
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
export declare class NetworkservicesProjectsLocationsOperationsCancelSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NetworkservicesProjectsLocationsOperationsCancelRequest extends SpeakeasyBase {
    pathParams: NetworkservicesProjectsLocationsOperationsCancelPathParams;
    queryParams: NetworkservicesProjectsLocationsOperationsCancelQueryParams;
    request?: Map<string, any>;
    security: NetworkservicesProjectsLocationsOperationsCancelSecurity;
}
export declare class NetworkservicesProjectsLocationsOperationsCancelResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
