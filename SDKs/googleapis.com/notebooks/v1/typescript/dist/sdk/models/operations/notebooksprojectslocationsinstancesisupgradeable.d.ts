import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class NotebooksProjectsLocationsInstancesIsUpgradeablePathParams extends SpeakeasyBase {
    notebookInstance: string;
}
export declare enum NotebooksProjectsLocationsInstancesIsUpgradeableTypeEnum {
    UpgradeTypeUnspecified = "UPGRADE_TYPE_UNSPECIFIED",
    UpgradeFramework = "UPGRADE_FRAMEWORK",
    UpgradeOs = "UPGRADE_OS",
    UpgradeCuda = "UPGRADE_CUDA",
    UpgradeAll = "UPGRADE_ALL"
}
export declare class NotebooksProjectsLocationsInstancesIsUpgradeableQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    type?: NotebooksProjectsLocationsInstancesIsUpgradeableTypeEnum;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class NotebooksProjectsLocationsInstancesIsUpgradeableSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NotebooksProjectsLocationsInstancesIsUpgradeableRequest extends SpeakeasyBase {
    pathParams: NotebooksProjectsLocationsInstancesIsUpgradeablePathParams;
    queryParams: NotebooksProjectsLocationsInstancesIsUpgradeableQueryParams;
    security: NotebooksProjectsLocationsInstancesIsUpgradeableSecurity;
}
export declare class NotebooksProjectsLocationsInstancesIsUpgradeableResponse extends SpeakeasyBase {
    contentType: string;
    isInstanceUpgradeableResponse?: shared.IsInstanceUpgradeableResponse;
    statusCode: number;
}
