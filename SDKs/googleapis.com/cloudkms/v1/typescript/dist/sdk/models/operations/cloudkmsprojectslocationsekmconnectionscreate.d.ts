import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CloudkmsProjectsLocationsEkmConnectionsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudkmsProjectsLocationsEkmConnectionsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    ekmConnectionId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudkmsProjectsLocationsEkmConnectionsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudkmsProjectsLocationsEkmConnectionsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudkmsProjectsLocationsEkmConnectionsCreateSecurity extends SpeakeasyBase {
    option1?: CloudkmsProjectsLocationsEkmConnectionsCreateSecurityOption1;
    option2?: CloudkmsProjectsLocationsEkmConnectionsCreateSecurityOption2;
}
export declare class CloudkmsProjectsLocationsEkmConnectionsCreateRequest extends SpeakeasyBase {
    pathParams: CloudkmsProjectsLocationsEkmConnectionsCreatePathParams;
    queryParams: CloudkmsProjectsLocationsEkmConnectionsCreateQueryParams;
    request?: shared.EkmConnection;
    security: CloudkmsProjectsLocationsEkmConnectionsCreateSecurity;
}
export declare class CloudkmsProjectsLocationsEkmConnectionsCreateResponse extends SpeakeasyBase {
    contentType: string;
    ekmConnection?: shared.EkmConnection;
    statusCode: number;
}
