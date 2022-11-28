import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NetworkservicesProjectsLocationsTcpRoutesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class NetworkservicesProjectsLocationsTcpRoutesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class NetworkservicesProjectsLocationsTcpRoutesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NetworkservicesProjectsLocationsTcpRoutesListRequest extends SpeakeasyBase {
    pathParams: NetworkservicesProjectsLocationsTcpRoutesListPathParams;
    queryParams: NetworkservicesProjectsLocationsTcpRoutesListQueryParams;
    security: NetworkservicesProjectsLocationsTcpRoutesListSecurity;
}
export declare class NetworkservicesProjectsLocationsTcpRoutesListResponse extends SpeakeasyBase {
    contentType: string;
    listTcpRoutesResponse?: shared.ListTcpRoutesResponse;
    statusCode: number;
}
