import { SpeakeasyBase } from "../../../internal/utils";
import { JurisdictionClassificationEnum } from "./jurisdictionclassificationenum";
import { RunPlan } from "./runplan";
import { LegislativeSession } from "./legislativesession";
import { Chamber } from "./chamber";
export declare class Jurisdiction extends SpeakeasyBase {
    classification: JurisdictionClassificationEnum;
    divisionId?: string;
    id: string;
    latestRuns?: RunPlan[];
    legislativeSessions?: LegislativeSession[];
    name: string;
    organizations?: Chamber[];
    url: string;
}
