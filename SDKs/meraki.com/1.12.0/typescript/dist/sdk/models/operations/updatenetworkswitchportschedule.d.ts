import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkSwitchPortSchedulePathParams extends SpeakeasyBase {
    networkId: string;
    portScheduleId: string;
}
/**
 * The schedule object for Friday.
**/
export declare class UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday extends SpeakeasyBase {
    active?: boolean;
    from?: string;
    to?: string;
}
/**
 * The schedule object for Monday.
**/
export declare class UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday extends SpeakeasyBase {
    active?: boolean;
    from?: string;
    to?: string;
}
/**
 * The schedule object for Saturday.
**/
export declare class UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday extends SpeakeasyBase {
    active?: boolean;
    from?: string;
    to?: string;
}
/**
 * The schedule object for Sunday.
**/
export declare class UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday extends SpeakeasyBase {
    active?: boolean;
    from?: string;
    to?: string;
}
/**
 * The schedule object for Thursday.
**/
export declare class UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday extends SpeakeasyBase {
    active?: boolean;
    from?: string;
    to?: string;
}
/**
 * The schedule object for Tuesday.
**/
export declare class UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday extends SpeakeasyBase {
    active?: boolean;
    from?: string;
    to?: string;
}
/**
 * The schedule object for Wednesday.
**/
export declare class UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday extends SpeakeasyBase {
    active?: boolean;
    from?: string;
    to?: string;
}
/**
 *     The schedule for switch port scheduling. Schedules are applied to days of the week.
 *     When it's empty, default schedule with all days of a week are configured.
 *     Any unspecified day in the schedule is added as a default schedule configuration of the day.
 *
**/
export declare class UpdateNetworkSwitchPortScheduleRequestBodyPortSchedule extends SpeakeasyBase {
    friday?: UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday;
    monday?: UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday;
    saturday?: UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday;
    sunday?: UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday;
    thursday?: UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday;
    tuesday?: UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday;
    wednesday?: UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday;
}
export declare class UpdateNetworkSwitchPortScheduleRequestBody extends SpeakeasyBase {
    name?: string;
    portSchedule?: UpdateNetworkSwitchPortScheduleRequestBodyPortSchedule;
}
export declare class UpdateNetworkSwitchPortScheduleRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkSwitchPortSchedulePathParams;
    request?: UpdateNetworkSwitchPortScheduleRequestBody;
}
export declare class UpdateNetworkSwitchPortScheduleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkSwitchPortSchedule200ApplicationJsonObject?: Map<string, any>;
}
