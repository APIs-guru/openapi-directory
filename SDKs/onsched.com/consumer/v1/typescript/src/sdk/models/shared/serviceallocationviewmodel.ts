import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RepeatViewModel } from "./repeatviewmodel";



export class ServiceAllocationViewModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bookingCount" })
  bookingCount?: number;

  @SpeakeasyMetadata({ data: "json, name=bookingLimit" })
  bookingLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=locationId" })
  locationId?: string;

  @SpeakeasyMetadata({ data: "json, name=objectName" })
  objectName?: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;

  @SpeakeasyMetadata({ data: "json, name=repeat" })
  repeat?: RepeatViewModel;

  @SpeakeasyMetadata({ data: "json, name=repeats" })
  repeats?: boolean;

  @SpeakeasyMetadata({ data: "json, name=resourceDescription" })
  resourceDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceId" })
  resourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceImageUrl" })
  resourceImageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceName" })
  resourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceDescription" })
  serviceDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceDuration" })
  serviceDuration?: number;

  @SpeakeasyMetadata({ data: "json, name=serviceId" })
  serviceId?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceImageUrl" })
  serviceImageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceName" })
  serviceName?: string;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: number;

  @SpeakeasyMetadata({ data: "json, name=timezoneName" })
  timezoneName?: string;

  @SpeakeasyMetadata({ data: "json, name=timezoneOffset" })
  timezoneOffset?: number;
}
