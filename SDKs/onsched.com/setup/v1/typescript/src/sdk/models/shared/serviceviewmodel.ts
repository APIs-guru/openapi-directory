import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ServiceViewModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=bookAheadUnit" })
  bookAheadUnit?: number;

  @Metadata({ data: "json, name=bookAheadValue" })
  bookAheadValue?: number;

  @Metadata({ data: "json, name=bookInAdvance" })
  bookInAdvance?: number;

  @Metadata({ data: "json, name=bookingInterval" })
  bookingInterval?: number;

  @Metadata({ data: "json, name=bookingLimit" })
  bookingLimit?: number;

  @Metadata({ data: "json, name=calendarId" })
  calendarId?: string;

  @Metadata({ data: "json, name=calendarResourceGroupId" })
  calendarResourceGroupId?: string;

  @Metadata({ data: "json, name=cancellationFeeAmount" })
  cancellationFeeAmount?: number;

  @Metadata({ data: "json, name=cancellationFeeTaxable" })
  cancellationFeeTaxable?: boolean;

  @Metadata({ data: "json, name=companyId" })
  companyId?: string;

  @Metadata({ data: "json, name=consumerPadding" })
  consumerPadding?: boolean;

  @Metadata({ data: "json, name=dailyBookingLimitCount" })
  dailyBookingLimitCount?: number;

  @Metadata({ data: "json, name=dailyBookingLimitMinutes" })
  dailyBookingLimitMinutes?: number;

  @Metadata({ data: "json, name=defaultService" })
  defaultService?: boolean;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=duration" })
  duration?: number;

  @Metadata({ data: "json, name=durationInterval" })
  durationInterval?: number;

  @Metadata({ data: "json, name=durationMax" })
  durationMax?: number;

  @Metadata({ data: "json, name=durationMin" })
  durationMin?: number;

  @Metadata({ data: "json, name=durationSelect" })
  durationSelect?: boolean;

  @Metadata({ data: "json, name=feeAmount" })
  feeAmount?: number;

  @Metadata({ data: "json, name=feeTaxable" })
  feeTaxable?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=imageUrl" })
  imageUrl?: string;

  @Metadata({ data: "json, name=locationId" })
  locationId?: string;

  @Metadata({ data: "json, name=maxBookingLimit" })
  maxBookingLimit?: number;

  @Metadata({ data: "json, name=maxCapacity" })
  maxCapacity?: number;

  @Metadata({ data: "json, name=maxGroupSize" })
  maxGroupSize?: number;

  @Metadata({ data: "json, name=maxResourceBookingLimit" })
  maxResourceBookingLimit?: number;

  @Metadata({ data: "json, name=mediaPageUrl" })
  mediaPageUrl?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=nonRefundable" })
  nonRefundable?: boolean;

  @Metadata({ data: "json, name=objectName" })
  objectName?: string;

  @Metadata({ data: "json, name=padding" })
  padding?: number;

  @Metadata({ data: "json, name=roundRobin" })
  roundRobin?: number;

  @Metadata({ data: "json, name=serviceGroupId" })
  serviceGroupId?: number;

  @Metadata({ data: "json, name=serviceGroupName" })
  serviceGroupName?: string;

  @Metadata({ data: "json, name=showOnline" })
  showOnline?: boolean;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
