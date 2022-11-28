import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateNetworkSwitchPortSchedulePathParams extends SpeakeasyBase {
    networkId: string;
}
/**
 * The schedule object for Friday.
**/
export declare class CreateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday extends SpeakeasyBase {
    active?: boolean;
    from?: string;
    to?: string;
}
/**
 * The schedule object for Monday.
**/
export declare class CreateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday extends SpeakeasyBase {
    active?: boolean;
    from?: string;
    to?: string;
}
/**
 * The schedule object for Saturday.
**/
export declare class CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday extends SpeakeasyBase {
    active?: boolean;
    from?: string;
    to?: string;
}
/**
 * The schedule object for Sunday.
**/
export declare class CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday extends SpeakeasyBase {
    active?: boolean;
    from?: string;
    to?: string;
}
/**
 * The schedule object for Thursday.
**/
export declare class CreateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday extends SpeakeasyBase {
    active?: boolean;
    from?: string;
    to?: string;
}
/**
 * The schedule object for Tuesday.
**/
export declare class CreateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday extends SpeakeasyBase {
    active?: boolean;
    from?: string;
    to?: string;
}
/**
 * The schedule object for Wednesday.
**/
export declare class CreateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday extends SpeakeasyBase {
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
export declare class CreateNetworkSwitchPortScheduleRequestBodyPortSchedule extends SpeakeasyBase {
    friday?: CreateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday;
    monday?: CreateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday;
    saturday?: CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday;
    sunday?: CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday;
    thursday?: CreateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday;
    tuesday?: CreateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday;
    wednesday?: CreateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday;
}
export declare class CreateNetworkSwitchPortScheduleRequestBody extends SpeakeasyBase {
    name: string;
    portSchedule?: CreateNetworkSwitchPortScheduleRequestBodyPortSchedule;
}
export declare class CreateNetworkSwitchPortScheduleRequest extends SpeakeasyBase {
    pathParams: CreateNetworkSwitchPortSchedulePathParams;
    request: CreateNetworkSwitchPortScheduleRequestBody;
}
export declare class CreateNetworkSwitchPortScheduleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createNetworkSwitchPortSchedule201ApplicationJsonObject?: Map<string, any>;
}
