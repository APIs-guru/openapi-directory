import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimRackGroupsCreateRequest extends SpeakeasyBase {
    request: shared.WritableRackGroupInput;
}
export declare class DcimRackGroupsCreateResponse extends SpeakeasyBase {
    contentType: string;
    rackGroup?: shared.RackGroup;
    statusCode: number;
}
