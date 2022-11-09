import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GuideInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndDate" })
  endDate?: Date;

  @Metadata({ data: "json, name=StartDate" })
  startDate?: Date;
}
