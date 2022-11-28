import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetActionPackageSearchQueryParams extends SpeakeasyBase {
    q?: string;
}
export declare class GetActionPackageSearchRequest extends SpeakeasyBase {
    queryParams: GetActionPackageSearchQueryParams;
}
export declare class GetActionPackageSearchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
