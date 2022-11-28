import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DrivelabelsLimitsGetLabelQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    name?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DrivelabelsLimitsGetLabelRequest extends SpeakeasyBase {
    queryParams: DrivelabelsLimitsGetLabelQueryParams;
}
export declare class DrivelabelsLimitsGetLabelResponse extends SpeakeasyBase {
    contentType: string;
    googleAppsDriveLabelsV2betaLabelLimits?: shared.GoogleAppsDriveLabelsV2betaLabelLimits;
    statusCode: number;
}
