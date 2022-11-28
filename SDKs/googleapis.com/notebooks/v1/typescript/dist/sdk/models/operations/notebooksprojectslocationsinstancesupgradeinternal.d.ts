import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NotebooksProjectsLocationsInstancesUpgradeInternalPathParams extends SpeakeasyBase {
    name: string;
}
export declare class NotebooksProjectsLocationsInstancesUpgradeInternalQueryParams extends SpeakeasyBase {
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
export declare class NotebooksProjectsLocationsInstancesUpgradeInternalSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NotebooksProjectsLocationsInstancesUpgradeInternalRequest extends SpeakeasyBase {
    pathParams: NotebooksProjectsLocationsInstancesUpgradeInternalPathParams;
    queryParams: NotebooksProjectsLocationsInstancesUpgradeInternalQueryParams;
    request?: shared.UpgradeInstanceInternalRequest;
    security: NotebooksProjectsLocationsInstancesUpgradeInternalSecurity;
}
export declare class NotebooksProjectsLocationsInstancesUpgradeInternalResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
