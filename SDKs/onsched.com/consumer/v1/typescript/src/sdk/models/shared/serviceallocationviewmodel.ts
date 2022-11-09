import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RepeatViewModel } from "./repeatviewmodel";


export class ServiceAllocationViewModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=bookingCount" })
  bookingCount?: number;

  @Metadata({ data: "json, name=bookingLimit" })
  bookingLimit?: number;

  @Metadata({ data: "json, name=endDate" })
  endDate?: string;

  @Metadata({ data: "json, name=endTime" })
  endTime?: number;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=locationId" })
  locationId?: string;

  @Metadata({ data: "json, name=objectName" })
  objectName?: string;

  @Metadata({ data: "json, name=reason" })
  reason?: string;

  @Metadata({ data: "json, name=repeat" })
  repeat?: RepeatViewModel;

  @Metadata({ data: "json, name=repeats" })
  repeats?: boolean;

  @Metadata({ data: "json, name=resourceDescription" })
  resourceDescription?: string;

  @Metadata({ data: "json, name=resourceId" })
  resourceId?: string;

  @Metadata({ data: "json, name=resourceImageUrl" })
  resourceImageUrl?: string;

  @Metadata({ data: "json, name=resourceName" })
  resourceName?: string;

  @Metadata({ data: "json, name=serviceDescription" })
  serviceDescription?: string;

  @Metadata({ data: "json, name=serviceDuration" })
  serviceDuration?: number;

  @Metadata({ data: "json, name=serviceId" })
  serviceId?: string;

  @Metadata({ data: "json, name=serviceImageUrl" })
  serviceImageUrl?: string;

  @Metadata({ data: "json, name=serviceName" })
  serviceName?: string;

  @Metadata({ data: "json, name=startDate" })
  startDate?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: number;

  @Metadata({ data: "json, name=timezoneName" })
  timezoneName?: string;

  @Metadata({ data: "json, name=timezoneOffset" })
  timezoneOffset?: number;
}
