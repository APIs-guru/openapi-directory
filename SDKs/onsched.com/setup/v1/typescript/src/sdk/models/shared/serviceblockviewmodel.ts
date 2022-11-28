import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RepeatViewModel } from "./repeatviewmodel";



export class ServiceBlockViewModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deletedStatus" })
  deletedStatus?: boolean;

  @SpeakeasyMetadata({ data: "json, name=deletedTime" })
  deletedTime?: string;

  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: Date;

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

  @SpeakeasyMetadata({ data: "json, name=serviceId" })
  serviceId?: string;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: number;
}
