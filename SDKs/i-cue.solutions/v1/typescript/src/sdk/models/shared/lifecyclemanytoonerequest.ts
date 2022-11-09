import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PlanningLevelDataDto } from "./planningleveldatadto";


export class LifecycleManyToOneRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.PlanningLevelDataDto })
  data?: PlanningLevelDataDto[];

  @Metadata({ data: "json, name=planningLevelId" })
  planningLevelId: string;

  @Metadata({ data: "json, name=ratios" })
  ratios?: number[];
}
