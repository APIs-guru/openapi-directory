import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicebrokerProjectsBrokersInstancesBindingsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ServicebrokerProjectsBrokersInstancesBindingsListQueryParams extends SpeakeasyBase {
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
export declare class ServicebrokerProjectsBrokersInstancesBindingsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicebrokerProjectsBrokersInstancesBindingsListRequest extends SpeakeasyBase {
    pathParams: ServicebrokerProjectsBrokersInstancesBindingsListPathParams;
    queryParams: ServicebrokerProjectsBrokersInstancesBindingsListQueryParams;
    security: ServicebrokerProjectsBrokersInstancesBindingsListSecurity;
}
export declare class ServicebrokerProjectsBrokersInstancesBindingsListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
