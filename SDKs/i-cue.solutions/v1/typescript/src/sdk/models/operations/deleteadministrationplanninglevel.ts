import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteAdministrationPlanningLevelHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class DeleteAdministrationPlanningLevelRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteAdministrationPlanningLevelHeaders;
}


export class DeleteAdministrationPlanningLevelResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
