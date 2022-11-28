import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSetupV1LocationsIdEmailTemplatesMasterPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSetupV1LocationsIdEmailTemplatesMasterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSetupV1LocationsIdEmailTemplatesMasterPathParams;
}


export class GetSetupV1LocationsIdEmailTemplatesMasterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  masterEmailTemplateSettingsViewModel?: shared.MasterEmailTemplateSettingsViewModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
