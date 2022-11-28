import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IpamVlanGroupsPartialUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class IpamVlanGroupsPartialUpdateRequest extends SpeakeasyBase {
    pathParams: IpamVlanGroupsPartialUpdatePathParams;
    request: shared.WritableVlanGroupInput;
}
export declare class IpamVlanGroupsPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    vlanGroup?: shared.VlanGroup;
}
