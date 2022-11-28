import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimRackRolesListQueryParams extends SpeakeasyBase {
    color?: string;
    limit?: number;
    name?: string;
    offset?: number;
    slug?: string;
}
export declare class DcimRackRolesList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.RackRole[];
}
export declare class DcimRackRolesListRequest extends SpeakeasyBase {
    queryParams: DcimRackRolesListQueryParams;
}
export declare class DcimRackRolesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    dcimRackRolesList200ApplicationJsonObject?: DcimRackRolesList200ApplicationJson;
}
