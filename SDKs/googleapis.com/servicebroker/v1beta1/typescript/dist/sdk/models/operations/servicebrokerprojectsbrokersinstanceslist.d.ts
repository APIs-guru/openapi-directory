import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicebrokerProjectsBrokersInstancesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ServicebrokerProjectsBrokersInstancesListQueryParams extends SpeakeasyBase {
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
export declare class ServicebrokerProjectsBrokersInstancesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicebrokerProjectsBrokersInstancesListRequest extends SpeakeasyBase {
    pathParams: ServicebrokerProjectsBrokersInstancesListPathParams;
    queryParams: ServicebrokerProjectsBrokersInstancesListQueryParams;
    security: ServicebrokerProjectsBrokersInstancesListSecurity;
}
export declare class ServicebrokerProjectsBrokersInstancesListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
