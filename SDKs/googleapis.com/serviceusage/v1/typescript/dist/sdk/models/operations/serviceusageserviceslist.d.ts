import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServiceusageServicesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ServiceusageServicesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ServiceusageServicesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServiceusageServicesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServiceusageServicesListSecurity extends SpeakeasyBase {
    option1?: ServiceusageServicesListSecurityOption1;
    option2?: ServiceusageServicesListSecurityOption2;
}
export declare class ServiceusageServicesListRequest extends SpeakeasyBase {
    pathParams: ServiceusageServicesListPathParams;
    queryParams: ServiceusageServicesListQueryParams;
    security: ServiceusageServicesListSecurity;
}
export declare class ServiceusageServicesListResponse extends SpeakeasyBase {
    contentType: string;
    listServicesResponse?: shared.ListServicesResponse;
    statusCode: number;
}
