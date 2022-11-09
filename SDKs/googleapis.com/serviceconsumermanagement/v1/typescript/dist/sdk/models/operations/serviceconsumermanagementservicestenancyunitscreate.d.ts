import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ServiceconsumermanagementServicesTenancyUnitsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ServiceconsumermanagementServicesTenancyUnitsCreateQueryParams extends SpeakeasyBase {
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
export declare class ServiceconsumermanagementServicesTenancyUnitsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServiceconsumermanagementServicesTenancyUnitsCreateRequest extends SpeakeasyBase {
    pathParams: ServiceconsumermanagementServicesTenancyUnitsCreatePathParams;
    queryParams: ServiceconsumermanagementServicesTenancyUnitsCreateQueryParams;
    request?: shared.CreateTenancyUnitRequest;
    security: ServiceconsumermanagementServicesTenancyUnitsCreateSecurity;
}
export declare class ServiceconsumermanagementServicesTenancyUnitsCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tenancyUnit?: shared.TenancyUnit;
}
