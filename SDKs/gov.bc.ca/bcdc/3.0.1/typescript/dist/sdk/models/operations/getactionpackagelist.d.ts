import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetActionPackageListQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
}
export declare class GetActionPackageListRequest extends SpeakeasyBase {
    queryParams: GetActionPackageListQueryParams;
}
export declare class GetActionPackageListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
