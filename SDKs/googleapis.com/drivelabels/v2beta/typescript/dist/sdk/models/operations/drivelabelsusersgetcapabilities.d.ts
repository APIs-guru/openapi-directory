import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DrivelabelsUsersGetCapabilitiesPathParams extends SpeakeasyBase {
    name: string;
}
export declare enum DrivelabelsUsersGetCapabilitiesViewEnum {
    LabelViewBasic = "LABEL_VIEW_BASIC",
    LabelViewFull = "LABEL_VIEW_FULL"
}
export declare class DrivelabelsUsersGetCapabilitiesQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    languageCode?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    useAdminAccess?: boolean;
    view?: DrivelabelsUsersGetCapabilitiesViewEnum;
}
export declare class DrivelabelsUsersGetCapabilitiesRequest extends SpeakeasyBase {
    pathParams: DrivelabelsUsersGetCapabilitiesPathParams;
    queryParams: DrivelabelsUsersGetCapabilitiesQueryParams;
}
export declare class DrivelabelsUsersGetCapabilitiesResponse extends SpeakeasyBase {
    contentType: string;
    googleAppsDriveLabelsV2betaUserCapabilities?: shared.GoogleAppsDriveLabelsV2betaUserCapabilities;
    statusCode: number;
}
