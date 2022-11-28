import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HealthcareProjectsLocationsDatasetsDeidentifyPathParams extends SpeakeasyBase {
    sourceDataset: string;
}
export declare class HealthcareProjectsLocationsDatasetsDeidentifyQueryParams extends SpeakeasyBase {
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
export declare class HealthcareProjectsLocationsDatasetsDeidentifySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class HealthcareProjectsLocationsDatasetsDeidentifyRequest extends SpeakeasyBase {
    pathParams: HealthcareProjectsLocationsDatasetsDeidentifyPathParams;
    queryParams: HealthcareProjectsLocationsDatasetsDeidentifyQueryParams;
    request?: shared.DeidentifyDatasetRequest;
    security: HealthcareProjectsLocationsDatasetsDeidentifySecurity;
}
export declare class HealthcareProjectsLocationsDatasetsDeidentifyResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
