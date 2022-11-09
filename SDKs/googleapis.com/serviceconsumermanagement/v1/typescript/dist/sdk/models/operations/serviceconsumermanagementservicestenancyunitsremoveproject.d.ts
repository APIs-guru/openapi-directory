import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ServiceconsumermanagementServicesTenancyUnitsRemoveProjectPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ServiceconsumermanagementServicesTenancyUnitsRemoveProjectQueryParams extends SpeakeasyBase {
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
export declare class ServiceconsumermanagementServicesTenancyUnitsRemoveProjectSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServiceconsumermanagementServicesTenancyUnitsRemoveProjectRequest extends SpeakeasyBase {
    pathParams: ServiceconsumermanagementServicesTenancyUnitsRemoveProjectPathParams;
    queryParams: ServiceconsumermanagementServicesTenancyUnitsRemoveProjectQueryParams;
    request?: shared.RemoveTenantProjectRequest;
    security: ServiceconsumermanagementServicesTenancyUnitsRemoveProjectSecurity;
}
export declare class ServiceconsumermanagementServicesTenancyUnitsRemoveProjectResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
