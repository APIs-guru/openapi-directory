import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DrivelabelsLabelsDisablePathParams extends SpeakeasyBase {
    name: string;
}
export declare class DrivelabelsLabelsDisableQueryParams extends SpeakeasyBase {
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
export declare class DrivelabelsLabelsDisableRequest extends SpeakeasyBase {
    pathParams: DrivelabelsLabelsDisablePathParams;
    queryParams: DrivelabelsLabelsDisableQueryParams;
    request?: shared.GoogleAppsDriveLabelsV2betaDisableLabelRequest;
}
export declare class DrivelabelsLabelsDisableResponse extends SpeakeasyBase {
    contentType: string;
    googleAppsDriveLabelsV2betaLabel?: shared.GoogleAppsDriveLabelsV2betaLabel;
    statusCode: number;
}
