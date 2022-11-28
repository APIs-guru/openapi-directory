import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimVirtualChassisListQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
}
export declare class DcimVirtualChassisList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.VirtualChassis[];
}
export declare class DcimVirtualChassisListRequest extends SpeakeasyBase {
    queryParams: DcimVirtualChassisListQueryParams;
}
export declare class DcimVirtualChassisListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    dcimVirtualChassisList200ApplicationJsonObject?: DcimVirtualChassisList200ApplicationJson;
}
