import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlanningLevelDataDto } from "./planningleveldatadto";



export class LifecycleManyToOneRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: PlanningLevelDataDto })
  data?: PlanningLevelDataDto[];

  @SpeakeasyMetadata({ data: "json, name=planningLevelId" })
  planningLevelId: string;

  @SpeakeasyMetadata({ data: "json, name=ratios" })
  ratios?: number[];
}
