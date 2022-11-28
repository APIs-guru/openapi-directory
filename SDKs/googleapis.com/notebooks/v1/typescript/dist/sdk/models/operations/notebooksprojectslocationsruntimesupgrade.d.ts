import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NotebooksProjectsLocationsRuntimesUpgradePathParams extends SpeakeasyBase {
    name: string;
}
export declare class NotebooksProjectsLocationsRuntimesUpgradeQueryParams extends SpeakeasyBase {
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
export declare class NotebooksProjectsLocationsRuntimesUpgradeSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NotebooksProjectsLocationsRuntimesUpgradeRequest extends SpeakeasyBase {
    pathParams: NotebooksProjectsLocationsRuntimesUpgradePathParams;
    queryParams: NotebooksProjectsLocationsRuntimesUpgradeQueryParams;
    request?: shared.UpgradeRuntimeRequest;
    security: NotebooksProjectsLocationsRuntimesUpgradeSecurity;
}
export declare class NotebooksProjectsLocationsRuntimesUpgradeResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
