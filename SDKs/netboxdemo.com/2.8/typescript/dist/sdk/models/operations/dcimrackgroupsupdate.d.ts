import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimRackGroupsUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimRackGroupsUpdateRequest extends SpeakeasyBase {
    pathParams: DcimRackGroupsUpdatePathParams;
    request: shared.WritableRackGroupInput;
}
export declare class DcimRackGroupsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    rackGroup?: shared.RackGroup;
    statusCode: number;
}
