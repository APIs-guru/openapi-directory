import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimRackRolesReadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimRackRolesReadRequest extends SpeakeasyBase {
    pathParams: DcimRackRolesReadPathParams;
}
export declare class DcimRackRolesReadResponse extends SpeakeasyBase {
    contentType: string;
    rackRole?: shared.RackRole;
    statusCode: number;
}
