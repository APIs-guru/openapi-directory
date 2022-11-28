import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingPlacementStrategiesDeletePathParams extends SpeakeasyBase {
    id: string;
    profileId: string;
}
export declare class DfareportingPlacementStrategiesDeleteQueryParams extends SpeakeasyBase {
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
export declare class DfareportingPlacementStrategiesDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingPlacementStrategiesDeleteRequest extends SpeakeasyBase {
    pathParams: DfareportingPlacementStrategiesDeletePathParams;
    queryParams: DfareportingPlacementStrategiesDeleteQueryParams;
    security: DfareportingPlacementStrategiesDeleteSecurity;
}
export declare class DfareportingPlacementStrategiesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
