import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChromeuxreportRecordsQueryRecordQueryParams extends SpeakeasyBase {
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
export declare class ChromeuxreportRecordsQueryRecordRequest extends SpeakeasyBase {
    queryParams: ChromeuxreportRecordsQueryRecordQueryParams;
    request?: shared.QueryRequest;
}
export declare class ChromeuxreportRecordsQueryRecordResponse extends SpeakeasyBase {
    contentType: string;
    queryResponse?: shared.QueryResponse;
    statusCode: number;
}
