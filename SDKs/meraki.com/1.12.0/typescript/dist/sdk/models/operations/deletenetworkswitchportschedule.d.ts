import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteNetworkSwitchPortSchedulePathParams extends SpeakeasyBase {
    networkId: string;
    portScheduleId: string;
}
export declare class DeleteNetworkSwitchPortScheduleRequest extends SpeakeasyBase {
    pathParams: DeleteNetworkSwitchPortSchedulePathParams;
}
export declare class DeleteNetworkSwitchPortScheduleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
