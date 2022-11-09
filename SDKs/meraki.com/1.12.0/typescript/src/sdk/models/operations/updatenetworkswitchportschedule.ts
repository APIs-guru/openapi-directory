import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkSwitchPortSchedulePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=portScheduleId" })
  portScheduleId: string;
}


// UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday
/** 
 * The schedule object for Friday.
**/
export class UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=from" })
  from?: string;

  @Metadata({ data: "json, name=to" })
  to?: string;
}


// UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday
/** 
 * The schedule object for Monday.
**/
export class UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=from" })
  from?: string;

  @Metadata({ data: "json, name=to" })
  to?: string;
}


// UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday
/** 
 * The schedule object for Saturday.
**/
export class UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=from" })
  from?: string;

  @Metadata({ data: "json, name=to" })
  to?: string;
}


// UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday
/** 
 * The schedule object for Sunday.
**/
export class UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=from" })
  from?: string;

  @Metadata({ data: "json, name=to" })
  to?: string;
}


// UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday
/** 
 * The schedule object for Thursday.
**/
export class UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=from" })
  from?: string;

  @Metadata({ data: "json, name=to" })
  to?: string;
}


// UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday
/** 
 * The schedule object for Tuesday.
**/
export class UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=from" })
  from?: string;

  @Metadata({ data: "json, name=to" })
  to?: string;
}


// UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday
/** 
 * The schedule object for Wednesday.
**/
export class UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=from" })
  from?: string;

  @Metadata({ data: "json, name=to" })
  to?: string;
}


// UpdateNetworkSwitchPortScheduleRequestBodyPortSchedule
/** 
 *     The schedule for switch port scheduling. Schedules are applied to days of the week.
 *     When it's empty, default schedule with all days of a week are configured.
 *     Any unspecified day in the schedule is added as a default schedule configuration of the day.
 * 
**/
export class UpdateNetworkSwitchPortScheduleRequestBodyPortSchedule extends SpeakeasyBase {
  @Metadata({ data: "json, name=friday" })
  friday?: UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday;

  @Metadata({ data: "json, name=monday" })
  monday?: UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday;

  @Metadata({ data: "json, name=saturday" })
  saturday?: UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday;

  @Metadata({ data: "json, name=sunday" })
  sunday?: UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday;

  @Metadata({ data: "json, name=thursday" })
  thursday?: UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday;

  @Metadata({ data: "json, name=tuesday" })
  tuesday?: UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday;

  @Metadata({ data: "json, name=wednesday" })
  wednesday?: UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday;
}


export class UpdateNetworkSwitchPortScheduleRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=portSchedule" })
  portSchedule?: UpdateNetworkSwitchPortScheduleRequestBodyPortSchedule;
}


export class UpdateNetworkSwitchPortScheduleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkSwitchPortSchedulePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkSwitchPortScheduleRequestBody;
}


export class UpdateNetworkSwitchPortScheduleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkSwitchPortSchedule200ApplicationJsonObject?: Map<string, any>;
}
