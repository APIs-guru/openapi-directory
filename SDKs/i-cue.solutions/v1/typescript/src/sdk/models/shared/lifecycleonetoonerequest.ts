import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlanningLevelDataDto } from "./planningleveldatadto";



export class LifecycleOneToOneRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: PlanningLevelDataDto;

  @SpeakeasyMetadata({ data: "json, name=planningLevelId" })
  planningLevelId: string;

  @SpeakeasyMetadata({ data: "json, name=ratio" })
  ratio?: number;
}
