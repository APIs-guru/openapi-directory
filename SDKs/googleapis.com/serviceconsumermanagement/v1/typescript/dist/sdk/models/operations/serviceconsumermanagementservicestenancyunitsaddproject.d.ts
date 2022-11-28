import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServiceconsumermanagementServicesTenancyUnitsAddProjectPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ServiceconsumermanagementServicesTenancyUnitsAddProjectQueryParams extends SpeakeasyBase {
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
export declare class ServiceconsumermanagementServicesTenancyUnitsAddProjectSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServiceconsumermanagementServicesTenancyUnitsAddProjectRequest extends SpeakeasyBase {
    pathParams: ServiceconsumermanagementServicesTenancyUnitsAddProjectPathParams;
    queryParams: ServiceconsumermanagementServicesTenancyUnitsAddProjectQueryParams;
    request?: shared.AddTenantProjectRequest;
    security: ServiceconsumermanagementServicesTenancyUnitsAddProjectSecurity;
}
export declare class ServiceconsumermanagementServicesTenancyUnitsAddProjectResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
