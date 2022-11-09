import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PlanningLevelDataDto } from "./planningleveldatadto";


export class PortfolioRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.PlanningLevelDataDto })
  data?: PlanningLevelDataDto[];

  @Metadata({ data: "json, name=planningLevelId" })
  planningLevelId: string;

  @Metadata({ data: "json, name=startDate" })
  startDate: string;
}
