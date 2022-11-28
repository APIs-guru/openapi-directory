import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServiceconsumermanagementServicesTenancyUnitsAttachProjectPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ServiceconsumermanagementServicesTenancyUnitsAttachProjectQueryParams extends SpeakeasyBase {
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
export declare class ServiceconsumermanagementServicesTenancyUnitsAttachProjectSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServiceconsumermanagementServicesTenancyUnitsAttachProjectRequest extends SpeakeasyBase {
    pathParams: ServiceconsumermanagementServicesTenancyUnitsAttachProjectPathParams;
    queryParams: ServiceconsumermanagementServicesTenancyUnitsAttachProjectQueryParams;
    request?: shared.AttachTenantProjectRequest;
    security: ServiceconsumermanagementServicesTenancyUnitsAttachProjectSecurity;
}
export declare class ServiceconsumermanagementServicesTenancyUnitsAttachProjectResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
