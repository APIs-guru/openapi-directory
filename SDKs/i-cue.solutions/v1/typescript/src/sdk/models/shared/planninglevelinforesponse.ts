import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PlanningLevelHyperparameterResponse } from "./planninglevelhyperparameterresponse";

export enum PlanningLevelInfoResponseStatusEnum {
    Unproccessed = "Unproccessed"
,    Running = "Running"
,    Complete = "Complete"
,    Failed = "Failed"
}


export class PlanningLevelInfoResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: string;

  @Metadata({ data: "json, name=dateCreated" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=externalId" })
  externalId?: string;

  @Metadata({ data: "json, name=filename" })
  filename?: string;

  @Metadata({ data: "json, name=hyperparameters" })
  hyperparameters?: PlanningLevelHyperparameterResponse;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=method" })
  method?: string;

  @Metadata({ data: "json, name=noTimeseries" })
  noTimeseries?: number;

  @Metadata({ data: "json, name=status" })
  status?: PlanningLevelInfoResponseStatusEnum;
}
