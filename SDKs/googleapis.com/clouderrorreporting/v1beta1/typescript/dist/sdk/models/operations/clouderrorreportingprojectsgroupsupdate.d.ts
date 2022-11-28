import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClouderrorreportingProjectsGroupsUpdatePathParams extends SpeakeasyBase {
    name: string;
}
export declare class ClouderrorreportingProjectsGroupsUpdateQueryParams extends SpeakeasyBase {
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
export declare class ClouderrorreportingProjectsGroupsUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClouderrorreportingProjectsGroupsUpdateRequest extends SpeakeasyBase {
    pathParams: ClouderrorreportingProjectsGroupsUpdatePathParams;
    queryParams: ClouderrorreportingProjectsGroupsUpdateQueryParams;
    request?: shared.ErrorGroup;
    security: ClouderrorreportingProjectsGroupsUpdateSecurity;
}
export declare class ClouderrorreportingProjectsGroupsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    errorGroup?: shared.ErrorGroup;
    statusCode: number;
}
