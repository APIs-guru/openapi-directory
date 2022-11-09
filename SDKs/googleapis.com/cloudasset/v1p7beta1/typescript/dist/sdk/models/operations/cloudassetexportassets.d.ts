import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CloudassetExportAssetsPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudassetExportAssetsQueryParams extends SpeakeasyBase {
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
export declare class CloudassetExportAssetsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudassetExportAssetsRequest extends SpeakeasyBase {
    pathParams: CloudassetExportAssetsPathParams;
    queryParams: CloudassetExportAssetsQueryParams;
    request?: shared.GoogleCloudAssetV1p7beta1ExportAssetsRequest;
    security: CloudassetExportAssetsSecurity;
}
export declare class CloudassetExportAssetsResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
