import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetReportPlanningLevelOrganizationHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class GetReportPlanningLevelOrganizationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetReportPlanningLevelOrganizationHeaders;
}


export class GetReportPlanningLevelOrganizationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
