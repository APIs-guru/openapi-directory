import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimRackRolesPartialUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimRackRolesPartialUpdateRequest extends SpeakeasyBase {
    pathParams: DcimRackRolesPartialUpdatePathParams;
    request: shared.RackRoleInput;
}
export declare class DcimRackRolesPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    rackRole?: shared.RackRole;
    statusCode: number;
}
