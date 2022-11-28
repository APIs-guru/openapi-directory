import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudassetProjectsExportAssetsPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudassetProjectsExportAssetsQueryParams extends SpeakeasyBase {
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
export declare class CloudassetProjectsExportAssetsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudassetProjectsExportAssetsRequest extends SpeakeasyBase {
    pathParams: CloudassetProjectsExportAssetsPathParams;
    queryParams: CloudassetProjectsExportAssetsQueryParams;
    request?: shared.ExportAssetsRequest;
    security: CloudassetProjectsExportAssetsSecurity;
}
export declare class CloudassetProjectsExportAssetsResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
