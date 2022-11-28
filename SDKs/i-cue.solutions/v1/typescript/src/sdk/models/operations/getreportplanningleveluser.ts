import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetReportPlanningLevelUserHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class GetReportPlanningLevelUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetReportPlanningLevelUserHeaders;
}


export class GetReportPlanningLevelUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
