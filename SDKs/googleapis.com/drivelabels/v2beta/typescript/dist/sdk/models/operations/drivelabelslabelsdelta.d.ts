import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DrivelabelsLabelsDeltaPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DrivelabelsLabelsDeltaQueryParams extends SpeakeasyBase {
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
export declare class DrivelabelsLabelsDeltaRequest extends SpeakeasyBase {
    pathParams: DrivelabelsLabelsDeltaPathParams;
    queryParams: DrivelabelsLabelsDeltaQueryParams;
    request?: shared.GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestInput;
}
export declare class DrivelabelsLabelsDeltaResponse extends SpeakeasyBase {
    contentType: string;
    googleAppsDriveLabelsV2betaDeltaUpdateLabelResponse?: shared.GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponse;
    statusCode: number;
}
