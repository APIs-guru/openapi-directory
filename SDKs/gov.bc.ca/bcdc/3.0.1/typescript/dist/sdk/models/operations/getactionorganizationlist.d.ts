import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetActionOrganizationListQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
}
export declare class GetActionOrganizationListRequest extends SpeakeasyBase {
    queryParams: GetActionOrganizationListQueryParams;
}
export declare class GetActionOrganizationListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
