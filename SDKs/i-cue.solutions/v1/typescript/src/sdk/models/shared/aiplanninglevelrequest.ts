import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PlanningLevelDataDto } from "./planningleveldatadto";
import { PlanningLevelInfoRequest } from "./planninglevelinforequest";

export enum AiPlanningLevelRequestMethodEnum {
    IcueMlp = "icueMLP"
,    IcueMlo = "icueMLO"
}


export class AiPlanningLevelRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.PlanningLevelDataDto })
  data?: PlanningLevelDataDto[];

  @Metadata({ data: "json, name=method" })
  method: AiPlanningLevelRequestMethodEnum;

  @Metadata({ data: "json, name=params" })
  params?: PlanningLevelInfoRequest;

  @Metadata({ data: "json, name=planningLevelId" })
  planningLevelId: string;

  @Metadata({ data: "json, name=startDate" })
  startDate: string;
}
