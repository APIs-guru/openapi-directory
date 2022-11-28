import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DriveDrivesDeletePathParams extends SpeakeasyBase {
    driveId: string;
}
export declare class DriveDrivesDeleteQueryParams extends SpeakeasyBase {
    allowItemDeletion?: boolean;
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    useDomainAdminAccess?: boolean;
    userIp?: string;
}
export declare class DriveDrivesDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveDrivesDeleteRequest extends SpeakeasyBase {
    pathParams: DriveDrivesDeletePathParams;
    queryParams: DriveDrivesDeleteQueryParams;
    security: DriveDrivesDeleteSecurity;
}
export declare class DriveDrivesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
