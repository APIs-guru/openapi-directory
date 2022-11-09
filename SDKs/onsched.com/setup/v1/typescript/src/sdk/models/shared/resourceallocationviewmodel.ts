import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RepeatViewModel } from "./repeatviewmodel";


export class ResourceAllocationViewModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=businessId" })
  businessId?: number;

  @Metadata({ data: "json, name=endDate" })
  endDate?: Date;

  @Metadata({ data: "json, name=endTime" })
  endTime?: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=objectName" })
  objectName?: string;

  @Metadata({ data: "json, name=reason" })
  reason?: string;

  @Metadata({ data: "json, name=repeat" })
  repeat?: RepeatViewModel;

  @Metadata({ data: "json, name=repeats" })
  repeats?: boolean;

  @Metadata({ data: "json, name=resourceId" })
  resourceId?: number;

  @Metadata({ data: "json, name=startDate" })
  startDate?: Date;

  @Metadata({ data: "json, name=startTime" })
  startTime?: number;
}
