import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicebrokerProjectsBrokersListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ServicebrokerProjectsBrokersListQueryParams extends SpeakeasyBase {
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
export declare class ServicebrokerProjectsBrokersListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicebrokerProjectsBrokersListRequest extends SpeakeasyBase {
    pathParams: ServicebrokerProjectsBrokersListPathParams;
    queryParams: ServicebrokerProjectsBrokersListQueryParams;
    security: ServicebrokerProjectsBrokersListSecurity;
}
export declare class ServicebrokerProjectsBrokersListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
