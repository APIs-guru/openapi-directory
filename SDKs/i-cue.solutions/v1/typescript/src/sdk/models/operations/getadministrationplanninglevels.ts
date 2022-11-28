import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAdministrationPlanningLevelsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class GetAdministrationPlanningLevelsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetAdministrationPlanningLevelsHeaders;
}


export class GetAdministrationPlanningLevelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.PlanningLevelInfoResponse })
  planningLevelInfoResponses?: shared.PlanningLevelInfoResponse[];

  @SpeakeasyMetadata()
  statusCode: number;
}
