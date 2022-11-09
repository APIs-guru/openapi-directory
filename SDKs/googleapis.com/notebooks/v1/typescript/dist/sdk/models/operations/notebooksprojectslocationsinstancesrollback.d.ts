import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class NotebooksProjectsLocationsInstancesRollbackPathParams extends SpeakeasyBase {
    name: string;
}
export declare class NotebooksProjectsLocationsInstancesRollbackQueryParams extends SpeakeasyBase {
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
export declare class NotebooksProjectsLocationsInstancesRollbackSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NotebooksProjectsLocationsInstancesRollbackRequest extends SpeakeasyBase {
    pathParams: NotebooksProjectsLocationsInstancesRollbackPathParams;
    queryParams: NotebooksProjectsLocationsInstancesRollbackQueryParams;
    request?: shared.RollbackInstanceRequest;
    security: NotebooksProjectsLocationsInstancesRollbackSecurity;
}
export declare class NotebooksProjectsLocationsInstancesRollbackResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
