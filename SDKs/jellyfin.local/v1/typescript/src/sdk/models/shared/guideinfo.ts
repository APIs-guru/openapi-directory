import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GuideInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=StartDate" })
  startDate?: Date;
}
