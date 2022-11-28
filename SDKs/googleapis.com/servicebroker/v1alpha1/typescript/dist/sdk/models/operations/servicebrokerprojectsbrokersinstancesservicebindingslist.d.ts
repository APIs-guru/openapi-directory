import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicebrokerProjectsBrokersInstancesServiceBindingsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ServicebrokerProjectsBrokersInstancesServiceBindingsListQueryParams extends SpeakeasyBase {
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
export declare class ServicebrokerProjectsBrokersInstancesServiceBindingsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicebrokerProjectsBrokersInstancesServiceBindingsListRequest extends SpeakeasyBase {
    pathParams: ServicebrokerProjectsBrokersInstancesServiceBindingsListPathParams;
    queryParams: ServicebrokerProjectsBrokersInstancesServiceBindingsListQueryParams;
    security: ServicebrokerProjectsBrokersInstancesServiceBindingsListSecurity;
}
export declare class ServicebrokerProjectsBrokersInstancesServiceBindingsListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
