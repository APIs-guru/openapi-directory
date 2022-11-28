import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IpamVlanGroupsUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class IpamVlanGroupsUpdateRequest extends SpeakeasyBase {
    pathParams: IpamVlanGroupsUpdatePathParams;
    request: shared.WritableVlanGroupInput;
}
export declare class IpamVlanGroupsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    vlanGroup?: shared.VlanGroup;
}
