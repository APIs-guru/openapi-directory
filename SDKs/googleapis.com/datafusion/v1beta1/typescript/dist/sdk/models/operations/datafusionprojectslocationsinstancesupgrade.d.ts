import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DatafusionProjectsLocationsInstancesUpgradePathParams extends SpeakeasyBase {
    name: string;
}
export declare class DatafusionProjectsLocationsInstancesUpgradeQueryParams extends SpeakeasyBase {
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
export declare class DatafusionProjectsLocationsInstancesUpgradeSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatafusionProjectsLocationsInstancesUpgradeRequest extends SpeakeasyBase {
    pathParams: DatafusionProjectsLocationsInstancesUpgradePathParams;
    queryParams: DatafusionProjectsLocationsInstancesUpgradeQueryParams;
    request?: Map<string, any>;
    security: DatafusionProjectsLocationsInstancesUpgradeSecurity;
}
export declare class DatafusionProjectsLocationsInstancesUpgradeResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
