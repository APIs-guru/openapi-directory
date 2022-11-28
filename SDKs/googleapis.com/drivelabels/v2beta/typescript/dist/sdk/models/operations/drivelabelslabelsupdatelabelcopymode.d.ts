import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DrivelabelsLabelsUpdateLabelCopyModePathParams extends SpeakeasyBase {
    name: string;
}
export declare class DrivelabelsLabelsUpdateLabelCopyModeQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DrivelabelsLabelsUpdateLabelCopyModeRequest extends SpeakeasyBase {
    pathParams: DrivelabelsLabelsUpdateLabelCopyModePathParams;
    queryParams: DrivelabelsLabelsUpdateLabelCopyModeQueryParams;
    request?: shared.GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequest;
}
export declare class DrivelabelsLabelsUpdateLabelCopyModeResponse extends SpeakeasyBase {
    contentType: string;
    googleAppsDriveLabelsV2betaLabel?: shared.GoogleAppsDriveLabelsV2betaLabel;
    statusCode: number;
}
