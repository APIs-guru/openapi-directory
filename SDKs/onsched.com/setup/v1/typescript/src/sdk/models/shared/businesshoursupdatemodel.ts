import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BusinessHourInputModel } from "./businesshourinputmodel";



export class BusinessHoursUpdateModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fri" })
  fri?: BusinessHourInputModel;

  @SpeakeasyMetadata({ data: "json, name=mon" })
  mon?: BusinessHourInputModel;

  @SpeakeasyMetadata({ data: "json, name=sat" })
  sat?: BusinessHourInputModel;

  @SpeakeasyMetadata({ data: "json, name=sun" })
  sun?: BusinessHourInputModel;

  @SpeakeasyMetadata({ data: "json, name=thu" })
  thu?: BusinessHourInputModel;

  @SpeakeasyMetadata({ data: "json, name=tue" })
  tue?: BusinessHourInputModel;

  @SpeakeasyMetadata({ data: "json, name=wed" })
  wed?: BusinessHourInputModel;
}
