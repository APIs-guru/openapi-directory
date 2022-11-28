import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DriveFilesGenerateIdsQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    count?: number;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    space?: string;
    type?: string;
    userIp?: string;
}
export declare class DriveFilesGenerateIdsSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesGenerateIdsSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesGenerateIdsSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesGenerateIdsSecurity extends SpeakeasyBase {
    option1?: DriveFilesGenerateIdsSecurityOption1;
    option2?: DriveFilesGenerateIdsSecurityOption2;
    option3?: DriveFilesGenerateIdsSecurityOption3;
}
export declare class DriveFilesGenerateIdsRequest extends SpeakeasyBase {
    queryParams: DriveFilesGenerateIdsQueryParams;
    security: DriveFilesGenerateIdsSecurity;
}
export declare class DriveFilesGenerateIdsResponse extends SpeakeasyBase {
    contentType: string;
    generatedIds?: shared.GeneratedIds;
    statusCode: number;
}
