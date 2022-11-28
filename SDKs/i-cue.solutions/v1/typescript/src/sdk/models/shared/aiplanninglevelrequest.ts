import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlanningLevelDataDto } from "./planningleveldatadto";
import { PlanningLevelInfoRequest } from "./planninglevelinforequest";


export enum AiPlanningLevelRequestMethodEnum {
    IcueMlp = "icueMLP",
    IcueMlo = "icueMLO"
}


export class AiPlanningLevelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: PlanningLevelDataDto })
  data?: PlanningLevelDataDto[];

  @SpeakeasyMetadata({ data: "json, name=method" })
  method: AiPlanningLevelRequestMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=params" })
  params?: PlanningLevelInfoRequest;

  @SpeakeasyMetadata({ data: "json, name=planningLevelId" })
  planningLevelId: string;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate: string;
}
