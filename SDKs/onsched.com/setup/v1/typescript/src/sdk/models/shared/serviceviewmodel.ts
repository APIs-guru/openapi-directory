import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ServiceViewModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bookAheadUnit" })
  bookAheadUnit?: number;

  @SpeakeasyMetadata({ data: "json, name=bookAheadValue" })
  bookAheadValue?: number;

  @SpeakeasyMetadata({ data: "json, name=bookInAdvance" })
  bookInAdvance?: number;

  @SpeakeasyMetadata({ data: "json, name=bookingInterval" })
  bookingInterval?: number;

  @SpeakeasyMetadata({ data: "json, name=bookingLimit" })
  bookingLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=calendarId" })
  calendarId?: string;

  @SpeakeasyMetadata({ data: "json, name=calendarResourceGroupId" })
  calendarResourceGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=cancellationFeeAmount" })
  cancellationFeeAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=cancellationFeeTaxable" })
  cancellationFeeTaxable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=companyId" })
  companyId?: string;

  @SpeakeasyMetadata({ data: "json, name=consumerPadding" })
  consumerPadding?: boolean;

  @SpeakeasyMetadata({ data: "json, name=dailyBookingLimitCount" })
  dailyBookingLimitCount?: number;

  @SpeakeasyMetadata({ data: "json, name=dailyBookingLimitMinutes" })
  dailyBookingLimitMinutes?: number;

  @SpeakeasyMetadata({ data: "json, name=defaultService" })
  defaultService?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=durationInterval" })
  durationInterval?: number;

  @SpeakeasyMetadata({ data: "json, name=durationMax" })
  durationMax?: number;

  @SpeakeasyMetadata({ data: "json, name=durationMin" })
  durationMin?: number;

  @SpeakeasyMetadata({ data: "json, name=durationSelect" })
  durationSelect?: boolean;

  @SpeakeasyMetadata({ data: "json, name=feeAmount" })
  feeAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=feeTaxable" })
  feeTaxable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=imageUrl" })
  imageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=locationId" })
  locationId?: string;

  @SpeakeasyMetadata({ data: "json, name=maxBookingLimit" })
  maxBookingLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=maxCapacity" })
  maxCapacity?: number;

  @SpeakeasyMetadata({ data: "json, name=maxGroupSize" })
  maxGroupSize?: number;

  @SpeakeasyMetadata({ data: "json, name=maxResourceBookingLimit" })
  maxResourceBookingLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=mediaPageUrl" })
  mediaPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nonRefundable" })
  nonRefundable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=objectName" })
  objectName?: string;

  @SpeakeasyMetadata({ data: "json, name=padding" })
  padding?: number;

  @SpeakeasyMetadata({ data: "json, name=roundRobin" })
  roundRobin?: number;

  @SpeakeasyMetadata({ data: "json, name=serviceGroupId" })
  serviceGroupId?: number;

  @SpeakeasyMetadata({ data: "json, name=serviceGroupName" })
  serviceGroupName?: string;

  @SpeakeasyMetadata({ data: "json, name=showOnline" })
  showOnline?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
