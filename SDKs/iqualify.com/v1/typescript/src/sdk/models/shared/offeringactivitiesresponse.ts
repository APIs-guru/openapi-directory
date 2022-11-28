import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OfferingActivitiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activityId" })
  activityId?: string;

  @SpeakeasyMetadata({ data: "json, name=time" })
  time?: number;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
