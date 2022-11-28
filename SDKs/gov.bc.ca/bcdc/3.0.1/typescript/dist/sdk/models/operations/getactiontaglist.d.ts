import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetActionTagListQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
}
export declare class GetActionTagListRequest extends SpeakeasyBase {
    queryParams: GetActionTagListQueryParams;
}
export declare class GetActionTagListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
