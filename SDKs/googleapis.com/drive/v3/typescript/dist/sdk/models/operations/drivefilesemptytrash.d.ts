import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DriveFilesEmptyTrashQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    enforceSingleParent?: boolean;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class DriveFilesEmptyTrashSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesEmptyTrashRequest extends SpeakeasyBase {
    queryParams: DriveFilesEmptyTrashQueryParams;
    security: DriveFilesEmptyTrashSecurity;
}
export declare class DriveFilesEmptyTrashResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
