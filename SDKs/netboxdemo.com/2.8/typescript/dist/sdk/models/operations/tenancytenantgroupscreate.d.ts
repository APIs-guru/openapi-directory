import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TenancyTenantGroupsCreateRequest extends SpeakeasyBase {
    request: shared.WritableTenantGroupInput;
}
export declare class TenancyTenantGroupsCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tenantGroup?: shared.TenantGroup;
}
