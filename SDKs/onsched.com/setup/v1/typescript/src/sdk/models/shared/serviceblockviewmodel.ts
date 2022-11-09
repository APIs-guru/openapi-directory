import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RepeatViewModel } from "./repeatviewmodel";


export class ServiceBlockViewModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=deletedStatus" })
  deletedStatus?: boolean;

  @Metadata({ data: "json, name=deletedTime" })
  deletedTime?: string;

  @Metadata({ data: "json, name=endDate" })
  endDate?: Date;

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

  @Metadata({ data: "json, name=serviceId" })
  serviceId?: string;

  @Metadata({ data: "json, name=startDate" })
  startDate?: Date;

  @Metadata({ data: "json, name=startTime" })
  startTime?: number;
}
