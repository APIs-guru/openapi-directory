import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RepeatUpdateModel } from "./repeatupdatemodel";



export class ServiceBlockUpdateModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: number;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;

  @SpeakeasyMetadata({ data: "json, name=repeat" })
  repeat?: RepeatUpdateModel;

  @SpeakeasyMetadata({ data: "json, name=repeats" })
  repeats?: boolean;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: number;
}
