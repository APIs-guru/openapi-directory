import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetReportPlanningLevelUserHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class GetReportPlanningLevelUserRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetReportPlanningLevelUserHeaders;
}


export class GetReportPlanningLevelUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
