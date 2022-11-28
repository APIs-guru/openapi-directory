import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimDeviceRolesListQueryParams extends SpeakeasyBase {
    color?: string;
    limit?: number;
    name?: string;
    offset?: number;
    slug?: string;
    vmRole?: string;
}
export declare class DcimDeviceRolesList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.DeviceRole[];
}
export declare class DcimDeviceRolesListRequest extends SpeakeasyBase {
    queryParams: DcimDeviceRolesListQueryParams;
}
export declare class DcimDeviceRolesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    dcimDeviceRolesList200ApplicationJsonObject?: DcimDeviceRolesList200ApplicationJson;
}
