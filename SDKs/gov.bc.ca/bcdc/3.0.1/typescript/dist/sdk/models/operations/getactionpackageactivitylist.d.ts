import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetActionPackageActivityListQueryParams extends SpeakeasyBase {
    id?: string;
    limit?: number;
    offset?: number;
}
export declare class GetActionPackageActivityListRequest extends SpeakeasyBase {
    queryParams: GetActionPackageActivityListQueryParams;
}
export declare class GetActionPackageActivityListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
