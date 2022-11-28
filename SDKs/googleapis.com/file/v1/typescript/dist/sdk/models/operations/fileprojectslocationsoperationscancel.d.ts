import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FileProjectsLocationsOperationsCancelPathParams extends SpeakeasyBase {
    name: string;
}
export declare class FileProjectsLocationsOperationsCancelQueryParams extends SpeakeasyBase {
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
export declare class FileProjectsLocationsOperationsCancelSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FileProjectsLocationsOperationsCancelRequest extends SpeakeasyBase {
    pathParams: FileProjectsLocationsOperationsCancelPathParams;
    queryParams: FileProjectsLocationsOperationsCancelQueryParams;
    request?: Map<string, any>;
    security: FileProjectsLocationsOperationsCancelSecurity;
}
export declare class FileProjectsLocationsOperationsCancelResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
