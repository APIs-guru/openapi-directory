import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsPathParams extends SpeakeasyBase {
    name: string;
}
export declare class SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsQueryParams extends SpeakeasyBase {
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
export declare class SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsRequest extends SpeakeasyBase {
    pathParams: SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsPathParams;
    queryParams: SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsQueryParams;
    security: SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsSecurity;
}
export declare class SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsResponse extends SpeakeasyBase {
    containerThreatDetectionSettings?: shared.ContainerThreatDetectionSettings;
    contentType: string;
    statusCode: number;
}
