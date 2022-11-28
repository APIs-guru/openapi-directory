import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkSwitchPortSchedulePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=portScheduleId" })
  portScheduleId: string;
}


// UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday
/** 
 * The schedule object for Friday.
**/
export class UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: string;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: string;
}


// UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday
/** 
 * The schedule object for Monday.
**/
export class UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: string;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: string;
}


// UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday
/** 
 * The schedule object for Saturday.
**/
export class UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: string;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: string;
}


// UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday
/** 
 * The schedule object for Sunday.
**/
export class UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: string;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: string;
}


// UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday
/** 
 * The schedule object for Thursday.
**/
export class UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: string;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: string;
}


// UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday
/** 
 * The schedule object for Tuesday.
**/
export class UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: string;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: string;
}


// UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday
/** 
 * The schedule object for Wednesday.
**/
export class UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: string;

  @SpeakeasyMetadata({ data: "json, name=to" })
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
  @SpeakeasyMetadata({ data: "json, name=friday" })
  friday?: UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday;

  @SpeakeasyMetadata({ data: "json, name=monday" })
  monday?: UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday;

  @SpeakeasyMetadata({ data: "json, name=saturday" })
  saturday?: UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday;

  @SpeakeasyMetadata({ data: "json, name=sunday" })
  sunday?: UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday;

  @SpeakeasyMetadata({ data: "json, name=thursday" })
  thursday?: UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday;

  @SpeakeasyMetadata({ data: "json, name=tuesday" })
  tuesday?: UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday;

  @SpeakeasyMetadata({ data: "json, name=wednesday" })
  wednesday?: UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday;
}


export class UpdateNetworkSwitchPortScheduleRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=portSchedule" })
  portSchedule?: UpdateNetworkSwitchPortScheduleRequestBodyPortSchedule;
}


export class UpdateNetworkSwitchPortScheduleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkSwitchPortSchedulePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkSwitchPortScheduleRequestBody;
}


export class UpdateNetworkSwitchPortScheduleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkSwitchPortSchedule200ApplicationJsonObject?: Map<string, any>;
}
