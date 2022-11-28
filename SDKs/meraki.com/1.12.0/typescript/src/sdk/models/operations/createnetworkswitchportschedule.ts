import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateNetworkSwitchPortSchedulePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


// CreateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday
/** 
 * The schedule object for Friday.
**/
export class CreateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: string;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: string;
}


// CreateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday
/** 
 * The schedule object for Monday.
**/
export class CreateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: string;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: string;
}


// CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday
/** 
 * The schedule object for Saturday.
**/
export class CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: string;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: string;
}


// CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday
/** 
 * The schedule object for Sunday.
**/
export class CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: string;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: string;
}


// CreateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday
/** 
 * The schedule object for Thursday.
**/
export class CreateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: string;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: string;
}


// CreateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday
/** 
 * The schedule object for Tuesday.
**/
export class CreateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: string;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: string;
}


// CreateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday
/** 
 * The schedule object for Wednesday.
**/
export class CreateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: string;

  @SpeakeasyMetadata({ data: "json, name=to" })
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
  @SpeakeasyMetadata({ data: "json, name=friday" })
  friday?: CreateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday;

  @SpeakeasyMetadata({ data: "json, name=monday" })
  monday?: CreateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday;

  @SpeakeasyMetadata({ data: "json, name=saturday" })
  saturday?: CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday;

  @SpeakeasyMetadata({ data: "json, name=sunday" })
  sunday?: CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday;

  @SpeakeasyMetadata({ data: "json, name=thursday" })
  thursday?: CreateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday;

  @SpeakeasyMetadata({ data: "json, name=tuesday" })
  tuesday?: CreateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday;

  @SpeakeasyMetadata({ data: "json, name=wednesday" })
  wednesday?: CreateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday;
}


export class CreateNetworkSwitchPortScheduleRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=portSchedule" })
  portSchedule?: CreateNetworkSwitchPortScheduleRequestBodyPortSchedule;
}


export class CreateNetworkSwitchPortScheduleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateNetworkSwitchPortSchedulePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateNetworkSwitchPortScheduleRequestBody;
}


export class CreateNetworkSwitchPortScheduleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createNetworkSwitchPortSchedule201ApplicationJsonObject?: Map<string, any>;
}
