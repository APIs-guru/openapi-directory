import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteAdministrationPlanningLevelHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class DeleteAdministrationPlanningLevelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: DeleteAdministrationPlanningLevelHeaders;
}


export class DeleteAdministrationPlanningLevelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
