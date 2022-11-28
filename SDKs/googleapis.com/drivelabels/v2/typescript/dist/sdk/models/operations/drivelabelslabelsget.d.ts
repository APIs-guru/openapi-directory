import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DrivelabelsLabelsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare enum DrivelabelsLabelsGetViewEnum {
    LabelViewBasic = "LABEL_VIEW_BASIC",
    LabelViewFull = "LABEL_VIEW_FULL"
}
export declare class DrivelabelsLabelsGetQueryParams extends SpeakeasyBase {
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
    view?: DrivelabelsLabelsGetViewEnum;
}
export declare class DrivelabelsLabelsGetRequest extends SpeakeasyBase {
    pathParams: DrivelabelsLabelsGetPathParams;
    queryParams: DrivelabelsLabelsGetQueryParams;
}
export declare class DrivelabelsLabelsGetResponse extends SpeakeasyBase {
    contentType: string;
    googleAppsDriveLabelsV2Label?: shared.GoogleAppsDriveLabelsV2Label;
    statusCode: number;
}
