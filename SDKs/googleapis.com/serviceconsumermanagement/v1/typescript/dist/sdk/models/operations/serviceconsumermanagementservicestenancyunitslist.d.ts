import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServiceconsumermanagementServicesTenancyUnitsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ServiceconsumermanagementServicesTenancyUnitsListQueryParams extends SpeakeasyBase {
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
export declare class ServiceconsumermanagementServicesTenancyUnitsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServiceconsumermanagementServicesTenancyUnitsListRequest extends SpeakeasyBase {
    pathParams: ServiceconsumermanagementServicesTenancyUnitsListPathParams;
    queryParams: ServiceconsumermanagementServicesTenancyUnitsListQueryParams;
    security: ServiceconsumermanagementServicesTenancyUnitsListSecurity;
}
export declare class ServiceconsumermanagementServicesTenancyUnitsListResponse extends SpeakeasyBase {
    contentType: string;
    listTenancyUnitsResponse?: shared.ListTenancyUnitsResponse;
    statusCode: number;
}
