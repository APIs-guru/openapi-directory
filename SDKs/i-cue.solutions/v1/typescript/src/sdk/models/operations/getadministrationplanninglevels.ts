import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAdministrationPlanningLevelsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class GetAdministrationPlanningLevelsRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetAdministrationPlanningLevelsHeaders;
}


export class GetAdministrationPlanningLevelsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.PlanningLevelInfoResponse })
  planningLevelInfoResponses?: shared.PlanningLevelInfoResponse[];

  @Metadata()
  statusCode: number;
}
