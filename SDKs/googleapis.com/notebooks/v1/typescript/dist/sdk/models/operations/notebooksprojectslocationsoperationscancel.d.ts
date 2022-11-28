import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NotebooksProjectsLocationsOperationsCancelPathParams extends SpeakeasyBase {
    name: string;
}
export declare class NotebooksProjectsLocationsOperationsCancelQueryParams extends SpeakeasyBase {
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
export declare class NotebooksProjectsLocationsOperationsCancelSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NotebooksProjectsLocationsOperationsCancelRequest extends SpeakeasyBase {
    pathParams: NotebooksProjectsLocationsOperationsCancelPathParams;
    queryParams: NotebooksProjectsLocationsOperationsCancelQueryParams;
    request?: Map<string, any>;
    security: NotebooksProjectsLocationsOperationsCancelSecurity;
}
export declare class NotebooksProjectsLocationsOperationsCancelResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
