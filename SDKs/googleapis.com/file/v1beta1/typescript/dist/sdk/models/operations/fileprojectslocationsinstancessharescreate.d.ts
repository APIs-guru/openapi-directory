import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FileProjectsLocationsInstancesSharesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class FileProjectsLocationsInstancesSharesCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    shareId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class FileProjectsLocationsInstancesSharesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FileProjectsLocationsInstancesSharesCreateRequest extends SpeakeasyBase {
    pathParams: FileProjectsLocationsInstancesSharesCreatePathParams;
    queryParams: FileProjectsLocationsInstancesSharesCreateQueryParams;
    request?: shared.ShareInput;
    security: FileProjectsLocationsInstancesSharesCreateSecurity;
}
export declare class FileProjectsLocationsInstancesSharesCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
