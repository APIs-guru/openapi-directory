import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimRackRolesUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimRackRolesUpdateRequest extends SpeakeasyBase {
    pathParams: DcimRackRolesUpdatePathParams;
    request: shared.RackRoleInput;
}
export declare class DcimRackRolesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    rackRole?: shared.RackRole;
    statusCode: number;
}
