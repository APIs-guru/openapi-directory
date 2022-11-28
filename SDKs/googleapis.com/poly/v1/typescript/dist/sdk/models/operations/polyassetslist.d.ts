import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PolyAssetsListMaxComplexityEnum {
    ComplexityUnspecified = "COMPLEXITY_UNSPECIFIED",
    Complex = "COMPLEX",
    Medium = "MEDIUM",
    Simple = "SIMPLE"
}
export declare class PolyAssetsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    category?: string;
    curated?: boolean;
    fields?: string;
    format?: string;
    key?: string;
    keywords?: string;
    maxComplexity?: PolyAssetsListMaxComplexityEnum;
    oauthToken?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class PolyAssetsListRequest extends SpeakeasyBase {
    queryParams: PolyAssetsListQueryParams;
}
export declare class PolyAssetsListResponse extends SpeakeasyBase {
    contentType: string;
    listAssetsResponse?: shared.ListAssetsResponse;
    statusCode: number;
}
