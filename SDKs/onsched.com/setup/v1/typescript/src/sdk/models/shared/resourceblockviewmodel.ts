import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RepeatViewModel } from "./repeatviewmodel";



export class ResourceBlockViewModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=businessId" })
  businessId?: number;

  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=objectName" })
  objectName?: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;

  @SpeakeasyMetadata({ data: "json, name=repeat" })
  repeat?: RepeatViewModel;

  @SpeakeasyMetadata({ data: "json, name=repeats" })
  repeats?: boolean;

  @SpeakeasyMetadata({ data: "json, name=resourceId" })
  resourceId?: number;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: number;
}
