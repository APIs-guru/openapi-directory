import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimRackRolesCreateRequest extends SpeakeasyBase {
    request: shared.RackRoleInput;
}
export declare class DcimRackRolesCreateResponse extends SpeakeasyBase {
    contentType: string;
    rackRole?: shared.RackRole;
    statusCode: number;
}
