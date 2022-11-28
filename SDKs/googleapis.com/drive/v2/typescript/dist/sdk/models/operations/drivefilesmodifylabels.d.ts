import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DriveFilesModifyLabelsPathParams extends SpeakeasyBase {
    fileId: string;
}
export declare class DriveFilesModifyLabelsQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class DriveFilesModifyLabelsSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesModifyLabelsSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesModifyLabelsSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesModifyLabelsSecurity extends SpeakeasyBase {
    option1?: DriveFilesModifyLabelsSecurityOption1;
    option2?: DriveFilesModifyLabelsSecurityOption2;
    option3?: DriveFilesModifyLabelsSecurityOption3;
}
export declare class DriveFilesModifyLabelsRequest extends SpeakeasyBase {
    pathParams: DriveFilesModifyLabelsPathParams;
    queryParams: DriveFilesModifyLabelsQueryParams;
    request?: shared.ModifyLabelsRequest;
    security: DriveFilesModifyLabelsSecurity;
}
export declare class DriveFilesModifyLabelsResponse extends SpeakeasyBase {
    contentType: string;
    modifyLabelsResponse?: shared.ModifyLabelsResponse;
    statusCode: number;
}
