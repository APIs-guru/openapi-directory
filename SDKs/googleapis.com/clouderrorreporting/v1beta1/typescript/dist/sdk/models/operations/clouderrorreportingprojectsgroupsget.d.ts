import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClouderrorreportingProjectsGroupsGetPathParams extends SpeakeasyBase {
    groupName: string;
}
export declare class ClouderrorreportingProjectsGroupsGetQueryParams extends SpeakeasyBase {
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
export declare class ClouderrorreportingProjectsGroupsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClouderrorreportingProjectsGroupsGetRequest extends SpeakeasyBase {
    pathParams: ClouderrorreportingProjectsGroupsGetPathParams;
    queryParams: ClouderrorreportingProjectsGroupsGetQueryParams;
    security: ClouderrorreportingProjectsGroupsGetSecurity;
}
export declare class ClouderrorreportingProjectsGroupsGetResponse extends SpeakeasyBase {
    contentType: string;
    errorGroup?: shared.ErrorGroup;
    statusCode: number;
}
