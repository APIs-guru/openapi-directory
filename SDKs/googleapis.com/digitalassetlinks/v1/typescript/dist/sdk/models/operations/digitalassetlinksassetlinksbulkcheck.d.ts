import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DigitalassetlinksAssetlinksBulkCheckQueryParams extends SpeakeasyBase {
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
export declare class DigitalassetlinksAssetlinksBulkCheckRequest extends SpeakeasyBase {
    queryParams: DigitalassetlinksAssetlinksBulkCheckQueryParams;
    request?: shared.BulkCheckRequest;
}
export declare class DigitalassetlinksAssetlinksBulkCheckResponse extends SpeakeasyBase {
    bulkCheckResponse?: shared.BulkCheckResponse;
    contentType: string;
    statusCode: number;
}
