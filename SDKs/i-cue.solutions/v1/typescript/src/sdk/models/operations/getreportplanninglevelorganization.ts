import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetReportPlanningLevelOrganizationHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class GetReportPlanningLevelOrganizationRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetReportPlanningLevelOrganizationHeaders;
}


export class GetReportPlanningLevelOrganizationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
