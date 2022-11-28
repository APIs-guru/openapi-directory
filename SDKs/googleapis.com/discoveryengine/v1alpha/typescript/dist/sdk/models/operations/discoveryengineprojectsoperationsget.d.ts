import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DiscoveryengineProjectsOperationsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DiscoveryengineProjectsOperationsGetQueryParams extends SpeakeasyBase {
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
export declare class DiscoveryengineProjectsOperationsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DiscoveryengineProjectsOperationsGetRequest extends SpeakeasyBase {
    pathParams: DiscoveryengineProjectsOperationsGetPathParams;
    queryParams: DiscoveryengineProjectsOperationsGetQueryParams;
    security: DiscoveryengineProjectsOperationsGetSecurity;
}
export declare class DiscoveryengineProjectsOperationsGetResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
