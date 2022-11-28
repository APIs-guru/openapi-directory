import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JurisdictionClassificationEnum } from "./jurisdictionclassificationenum";
import { RunPlan } from "./runplan";
import { LegislativeSession } from "./legislativesession";
import { Chamber } from "./chamber";



export class Jurisdiction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=classification" })
  classification: JurisdictionClassificationEnum;

  @SpeakeasyMetadata({ data: "json, name=division_id" })
  divisionId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=latest_runs", elemType: RunPlan })
  latestRuns?: RunPlan[];

  @SpeakeasyMetadata({ data: "json, name=legislative_sessions", elemType: LegislativeSession })
  legislativeSessions?: LegislativeSession[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=organizations", elemType: Chamber })
  organizations?: Chamber[];

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
