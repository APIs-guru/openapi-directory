import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DrivelabelsLabelsEnablePathParams extends SpeakeasyBase {
    name: string;
}
export declare class DrivelabelsLabelsEnableQueryParams extends SpeakeasyBase {
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
export declare class DrivelabelsLabelsEnableRequest extends SpeakeasyBase {
    pathParams: DrivelabelsLabelsEnablePathParams;
    queryParams: DrivelabelsLabelsEnableQueryParams;
    request?: shared.GoogleAppsDriveLabelsV2betaEnableLabelRequest;
}
export declare class DrivelabelsLabelsEnableResponse extends SpeakeasyBase {
    contentType: string;
    googleAppsDriveLabelsV2betaLabel?: shared.GoogleAppsDriveLabelsV2betaLabel;
    statusCode: number;
}
