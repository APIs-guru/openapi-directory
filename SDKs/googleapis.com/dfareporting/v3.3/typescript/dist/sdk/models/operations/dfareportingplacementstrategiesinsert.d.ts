import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingPlacementStrategiesInsertPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingPlacementStrategiesInsertQueryParams extends SpeakeasyBase {
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
export declare class DfareportingPlacementStrategiesInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingPlacementStrategiesInsertRequest extends SpeakeasyBase {
    pathParams: DfareportingPlacementStrategiesInsertPathParams;
    queryParams: DfareportingPlacementStrategiesInsertQueryParams;
    request?: shared.PlacementStrategy;
    security: DfareportingPlacementStrategiesInsertSecurity;
}
export declare class DfareportingPlacementStrategiesInsertResponse extends SpeakeasyBase {
    contentType: string;
    placementStrategy?: shared.PlacementStrategy;
    statusCode: number;
}
