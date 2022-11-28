import { SpeakeasyBase } from "../../../internal/utils";
import { PlanningLevelHyperparameterResponse } from "./planninglevelhyperparameterresponse";
export declare enum PlanningLevelInfoResponseStatusEnum {
    Unproccessed = "Unproccessed",
    Running = "Running",
    Complete = "Complete",
    Failed = "Failed"
}
export declare class PlanningLevelInfoResponse extends SpeakeasyBase {
    action?: string;
    dateCreated?: Date;
    externalId?: string;
    filename?: string;
    hyperparameters?: PlanningLevelHyperparameterResponse;
    id?: number;
    method?: string;
    noTimeseries?: number;
    status?: PlanningLevelInfoResponseStatusEnum;
}
