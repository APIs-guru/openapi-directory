import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VmmigrationProjectsLocationsSourcesDatacenterConnectorsUpgradeAppliancePathParams extends SpeakeasyBase {
    datacenterConnector: string;
}
export declare class VmmigrationProjectsLocationsSourcesDatacenterConnectorsUpgradeApplianceQueryParams extends SpeakeasyBase {
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
export declare class VmmigrationProjectsLocationsSourcesDatacenterConnectorsUpgradeApplianceSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VmmigrationProjectsLocationsSourcesDatacenterConnectorsUpgradeApplianceRequest extends SpeakeasyBase {
    pathParams: VmmigrationProjectsLocationsSourcesDatacenterConnectorsUpgradeAppliancePathParams;
    queryParams: VmmigrationProjectsLocationsSourcesDatacenterConnectorsUpgradeApplianceQueryParams;
    request?: shared.UpgradeApplianceRequest;
    security: VmmigrationProjectsLocationsSourcesDatacenterConnectorsUpgradeApplianceSecurity;
}
export declare class VmmigrationProjectsLocationsSourcesDatacenterConnectorsUpgradeApplianceResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
