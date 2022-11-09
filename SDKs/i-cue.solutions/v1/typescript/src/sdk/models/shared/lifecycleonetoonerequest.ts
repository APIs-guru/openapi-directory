import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PlanningLevelDataDto } from "./planningleveldatadto";


export class LifecycleOneToOneRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: PlanningLevelDataDto;

  @Metadata({ data: "json, name=planningLevelId" })
  planningLevelId: string;

  @Metadata({ data: "json, name=ratio" })
  ratio?: number;
}
