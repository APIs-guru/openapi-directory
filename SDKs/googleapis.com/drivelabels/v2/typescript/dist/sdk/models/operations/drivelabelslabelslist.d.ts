import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DrivelabelsLabelsListMinimumRoleEnum {
    LabelRoleUnspecified = "LABEL_ROLE_UNSPECIFIED",
    Reader = "READER",
    Applier = "APPLIER",
    Organizer = "ORGANIZER",
    Editor = "EDITOR"
}
export declare enum DrivelabelsLabelsListViewEnum {
    LabelViewBasic = "LABEL_VIEW_BASIC",
    LabelViewFull = "LABEL_VIEW_FULL"
}
export declare class DrivelabelsLabelsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    languageCode?: string;
    minimumRole?: DrivelabelsLabelsListMinimumRoleEnum;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    publishedOnly?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    useAdminAccess?: boolean;
    view?: DrivelabelsLabelsListViewEnum;
}
export declare class DrivelabelsLabelsListRequest extends SpeakeasyBase {
    queryParams: DrivelabelsLabelsListQueryParams;
}
export declare class DrivelabelsLabelsListResponse extends SpeakeasyBase {
    contentType: string;
    googleAppsDriveLabelsV2ListLabelsResponse?: shared.GoogleAppsDriveLabelsV2ListLabelsResponse;
    statusCode: number;
}
