import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IpamVlanGroupsReadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class IpamVlanGroupsReadRequest extends SpeakeasyBase {
    pathParams: IpamVlanGroupsReadPathParams;
}
export declare class IpamVlanGroupsReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    vlanGroup?: shared.VlanGroup;
}
