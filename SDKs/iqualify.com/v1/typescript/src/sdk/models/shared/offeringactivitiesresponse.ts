import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OfferingActivitiesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=activityId" })
  activityId?: string;

  @Metadata({ data: "json, name=time" })
  time?: number;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
