import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { JurisdictionClassificationEnum } from "./jurisdictionclassificationenum";
import { RunPlan } from "./runplan";
import { LegislativeSession } from "./legislativesession";
import { Chamber } from "./chamber";


export class Jurisdiction extends SpeakeasyBase {
  @Metadata({ data: "json, name=classification" })
  classification: JurisdictionClassificationEnum;

  @Metadata({ data: "json, name=division_id" })
  divisionId?: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=latest_runs", elemType: shared.RunPlan })
  latestRuns?: RunPlan[];

  @Metadata({ data: "json, name=legislative_sessions", elemType: shared.LegislativeSession })
  legislativeSessions?: LegislativeSession[];

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=organizations", elemType: shared.Chamber })
  organizations?: Chamber[];

  @Metadata({ data: "json, name=url" })
  url: string;
}
