import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetActionPackageActivityListHtmlQueryParams extends SpeakeasyBase {
    id?: string;
    limit?: number;
    offset?: number;
}
export declare class GetActionPackageActivityListHtmlRequest extends SpeakeasyBase {
    queryParams: GetActionPackageActivityListHtmlQueryParams;
}
export declare class GetActionPackageActivityListHtmlResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
