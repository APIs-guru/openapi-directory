import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimRackGroupsPartialUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimRackGroupsPartialUpdateRequest extends SpeakeasyBase {
    pathParams: DcimRackGroupsPartialUpdatePathParams;
    request: shared.WritableRackGroupInput;
}
export declare class DcimRackGroupsPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    rackGroup?: shared.RackGroup;
    statusCode: number;
}
