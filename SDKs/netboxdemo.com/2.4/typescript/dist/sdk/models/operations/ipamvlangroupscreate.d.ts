import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IpamVlanGroupsCreateRequest extends SpeakeasyBase {
    request: shared.WritableVlanGroupInput;
}
export declare class IpamVlanGroupsCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    vlanGroup?: shared.VlanGroup;
}
