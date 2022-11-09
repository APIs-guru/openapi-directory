import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SecuritycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettingsPathParams extends SpeakeasyBase {
    name: string;
}
export declare class SecuritycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettingsQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class SecuritycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettingsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SecuritycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettingsRequest extends SpeakeasyBase {
    pathParams: SecuritycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettingsPathParams;
    queryParams: SecuritycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettingsQueryParams;
    request?: shared.ContainerThreatDetectionSettings;
    security: SecuritycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettingsSecurity;
}
export declare class SecuritycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettingsResponse extends SpeakeasyBase {
    containerThreatDetectionSettings?: shared.ContainerThreatDetectionSettings;
    contentType: string;
    statusCode: number;
}
