import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimRackGroupsReadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimRackGroupsReadRequest extends SpeakeasyBase {
    pathParams: DcimRackGroupsReadPathParams;
}
export declare class DcimRackGroupsReadResponse extends SpeakeasyBase {
    contentType: string;
    rackGroup?: shared.RackGroup;
    statusCode: number;
}
