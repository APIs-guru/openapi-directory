import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlanningLevelHyperparameterResponse } from "./planninglevelhyperparameterresponse";


export enum PlanningLevelInfoResponseStatusEnum {
    Unproccessed = "Unproccessed",
    Running = "Running",
    Complete = "Complete",
    Failed = "Failed"
}


export class PlanningLevelInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: string;

  @SpeakeasyMetadata({ data: "json, name=dateCreated" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=externalId" })
  externalId?: string;

  @SpeakeasyMetadata({ data: "json, name=filename" })
  filename?: string;

  @SpeakeasyMetadata({ data: "json, name=hyperparameters" })
  hyperparameters?: PlanningLevelHyperparameterResponse;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: string;

  @SpeakeasyMetadata({ data: "json, name=noTimeseries" })
  noTimeseries?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: PlanningLevelInfoResponseStatusEnum;
}
