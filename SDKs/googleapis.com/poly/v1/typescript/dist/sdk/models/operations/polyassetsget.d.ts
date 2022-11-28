import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PolyAssetsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class PolyAssetsGetQueryParams extends SpeakeasyBase {
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
export declare class PolyAssetsGetRequest extends SpeakeasyBase {
    pathParams: PolyAssetsGetPathParams;
    queryParams: PolyAssetsGetQueryParams;
}
export declare class PolyAssetsGetResponse extends SpeakeasyBase {
    asset?: shared.Asset;
    contentType: string;
    statusCode: number;
}
