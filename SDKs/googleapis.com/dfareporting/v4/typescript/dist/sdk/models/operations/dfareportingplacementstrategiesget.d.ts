import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingPlacementStrategiesGetPathParams extends SpeakeasyBase {
    id: string;
    profileId: string;
}
export declare class DfareportingPlacementStrategiesGetQueryParams extends SpeakeasyBase {
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
export declare class DfareportingPlacementStrategiesGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingPlacementStrategiesGetRequest extends SpeakeasyBase {
    pathParams: DfareportingPlacementStrategiesGetPathParams;
    queryParams: DfareportingPlacementStrategiesGetQueryParams;
    security: DfareportingPlacementStrategiesGetSecurity;
}
export declare class DfareportingPlacementStrategiesGetResponse extends SpeakeasyBase {
    contentType: string;
    placementStrategy?: shared.PlacementStrategy;
    statusCode: number;
}
