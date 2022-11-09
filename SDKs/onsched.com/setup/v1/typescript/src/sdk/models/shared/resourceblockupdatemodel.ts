import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ResourceBlockUpdateModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=allDay" })
  allDay?: boolean;

  @Metadata({ data: "json, name=endDate" })
  endDate?: Date;

  @Metadata({ data: "json, name=endTime" })
  endTime?: number;

  @Metadata({ data: "json, name=reason" })
  reason?: string;

  @Metadata({ data: "json, name=repeats" })
  repeats?: boolean;

  @Metadata({ data: "json, name=startDate" })
  startDate?: Date;

  @Metadata({ data: "json, name=startTime" })
  startTime?: number;
}
