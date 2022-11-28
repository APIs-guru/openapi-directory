import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NetworkservicesProjectsLocationsTcpRoutesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class NetworkservicesProjectsLocationsTcpRoutesCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    tcpRouteId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class NetworkservicesProjectsLocationsTcpRoutesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NetworkservicesProjectsLocationsTcpRoutesCreateRequest extends SpeakeasyBase {
    pathParams: NetworkservicesProjectsLocationsTcpRoutesCreatePathParams;
    queryParams: NetworkservicesProjectsLocationsTcpRoutesCreateQueryParams;
    request?: shared.TcpRouteInput;
    security: NetworkservicesProjectsLocationsTcpRoutesCreateSecurity;
}
export declare class NetworkservicesProjectsLocationsTcpRoutesCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
