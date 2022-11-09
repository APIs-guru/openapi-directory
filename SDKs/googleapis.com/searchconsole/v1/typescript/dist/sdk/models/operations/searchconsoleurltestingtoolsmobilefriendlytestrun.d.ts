import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SearchconsoleUrlTestingToolsMobileFriendlyTestRunQueryParams extends SpeakeasyBase {
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
export declare class SearchconsoleUrlTestingToolsMobileFriendlyTestRunRequest extends SpeakeasyBase {
    queryParams: SearchconsoleUrlTestingToolsMobileFriendlyTestRunQueryParams;
    request?: shared.RunMobileFriendlyTestRequest;
}
export declare class SearchconsoleUrlTestingToolsMobileFriendlyTestRunResponse extends SpeakeasyBase {
    contentType: string;
    runMobileFriendlyTestResponse?: shared.RunMobileFriendlyTestResponse;
    statusCode: number;
}
