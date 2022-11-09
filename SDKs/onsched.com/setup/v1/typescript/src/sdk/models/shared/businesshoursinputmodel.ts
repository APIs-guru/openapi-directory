import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BusinessHourInputModel } from "./businesshourinputmodel";
import { BusinessHourInputModel } from "./businesshourinputmodel";
import { BusinessHourInputModel } from "./businesshourinputmodel";
import { BusinessHourInputModel } from "./businesshourinputmodel";
import { BusinessHourInputModel } from "./businesshourinputmodel";
import { BusinessHourInputModel } from "./businesshourinputmodel";
import { BusinessHourInputModel } from "./businesshourinputmodel";


export class BusinessHoursInputModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=fri" })
  fri?: BusinessHourInputModel;

  @Metadata({ data: "json, name=mon" })
  mon?: BusinessHourInputModel;

  @Metadata({ data: "json, name=sat" })
  sat?: BusinessHourInputModel;

  @Metadata({ data: "json, name=sun" })
  sun?: BusinessHourInputModel;

  @Metadata({ data: "json, name=thu" })
  thu?: BusinessHourInputModel;

  @Metadata({ data: "json, name=tue" })
  tue?: BusinessHourInputModel;

  @Metadata({ data: "json, name=wed" })
  wed?: BusinessHourInputModel;
}
