import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DrivelabelsLabelsCreateQueryParams extends SpeakeasyBase {
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
}
export declare class DrivelabelsLabelsCreateRequest extends SpeakeasyBase {
    queryParams: DrivelabelsLabelsCreateQueryParams;
    request?: shared.GoogleAppsDriveLabelsV2betaLabelInput;
}
export declare class DrivelabelsLabelsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleAppsDriveLabelsV2betaLabel?: shared.GoogleAppsDriveLabelsV2betaLabel;
    statusCode: number;
}
