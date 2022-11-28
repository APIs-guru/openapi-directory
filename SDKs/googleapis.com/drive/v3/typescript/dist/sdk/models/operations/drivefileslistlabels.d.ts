import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DriveFilesListLabelsPathParams extends SpeakeasyBase {
    fileId: string;
}
export declare class DriveFilesListLabelsQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class DriveFilesListLabelsSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesListLabelsSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesListLabelsSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesListLabelsSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesListLabelsSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesListLabelsSecurity extends SpeakeasyBase {
    option1?: DriveFilesListLabelsSecurityOption1;
    option2?: DriveFilesListLabelsSecurityOption2;
    option3?: DriveFilesListLabelsSecurityOption3;
    option4?: DriveFilesListLabelsSecurityOption4;
    option5?: DriveFilesListLabelsSecurityOption5;
}
export declare class DriveFilesListLabelsRequest extends SpeakeasyBase {
    pathParams: DriveFilesListLabelsPathParams;
    queryParams: DriveFilesListLabelsQueryParams;
    security: DriveFilesListLabelsSecurity;
}
export declare class DriveFilesListLabelsResponse extends SpeakeasyBase {
    contentType: string;
    labelList?: shared.LabelList;
    statusCode: number;
}
