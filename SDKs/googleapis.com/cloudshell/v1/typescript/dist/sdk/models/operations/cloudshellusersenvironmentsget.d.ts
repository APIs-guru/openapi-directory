import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CloudshellUsersEnvironmentsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudshellUsersEnvironmentsGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudshellUsersEnvironmentsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudshellUsersEnvironmentsGetRequest extends SpeakeasyBase {
    pathParams: CloudshellUsersEnvironmentsGetPathParams;
    queryParams: CloudshellUsersEnvironmentsGetQueryParams;
    security: CloudshellUsersEnvironmentsGetSecurity;
}
export declare class CloudshellUsersEnvironmentsGetResponse extends SpeakeasyBase {
    contentType: string;
    environment?: shared.Environment;
    statusCode: number;
}
