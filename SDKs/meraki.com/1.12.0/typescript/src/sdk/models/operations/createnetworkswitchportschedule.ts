import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateNetworkSwitchPortSchedulePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


// CreateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday
/** 
 * The schedule object for Friday.
**/
export class CreateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=from" })
  from?: string;

  @Metadata({ data: "json, name=to" })
  to?: string;
}


// CreateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday
/** 
 * The schedule object for Monday.
**/
export class CreateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=from" })
  from?: string;

  @Metadata({ data: "json, name=to" })
  to?: string;
}


// CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday
/** 
 * The schedule object for Saturday.
**/
export class CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=from" })
  from?: string;

  @Metadata({ data: "json, name=to" })
  to?: string;
}


// CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday
/** 
 * The schedule object for Sunday.
**/
export class CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=from" })
  from?: string;

  @Metadata({ data: "json, name=to" })
  to?: string;
}


// CreateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday
/** 
 * The schedule object for Thursday.
**/
export class CreateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=from" })
  from?: string;

  @Metadata({ data: "json, name=to" })
  to?: string;
}


// CreateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday
/** 
 * The schedule object for Tuesday.
**/
export class CreateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=from" })
  from?: string;

  @Metadata({ data: "json, name=to" })
  to?: string;
}


// CreateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday
/** 
 * The schedule object for Wednesday.
**/
export class CreateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=from" })
  from?: string;

  @Metadata({ data: "json, name=to" })
  to?: string;
}


// CreateNetworkSwitchPortScheduleRequestBodyPortSchedule
/** 
 *     The schedule for switch port scheduling. Schedules are applied to days of the week.
 *     When it's empty, default schedule with all days of a week are configured.
 *     Any unspecified day in the schedule is added as a default schedule configuration of the day.
 * 
**/
export class CreateNetworkSwitchPortScheduleRequestBodyPortSchedule extends SpeakeasyBase {
  @Metadata({ data: "json, name=friday" })
  friday?: CreateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday;

  @Metadata({ data: "json, name=monday" })
  monday?: CreateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday;

  @Metadata({ data: "json, name=saturday" })
  saturday?: CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday;

  @Metadata({ data: "json, name=sunday" })
  sunday?: CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday;

  @Metadata({ data: "json, name=thursday" })
  thursday?: CreateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday;

  @Metadata({ data: "json, name=tuesday" })
  tuesday?: CreateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday;

  @Metadata({ data: "json, name=wednesday" })
  wednesday?: CreateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday;
}


export class CreateNetworkSwitchPortScheduleRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=portSchedule" })
  portSchedule?: CreateNetworkSwitchPortScheduleRequestBodyPortSchedule;
}


export class CreateNetworkSwitchPortScheduleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateNetworkSwitchPortSchedulePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateNetworkSwitchPortScheduleRequestBody;
}


export class CreateNetworkSwitchPortScheduleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createNetworkSwitchPortSchedule201ApplicationJsonObject?: Map<string, any>;
}
