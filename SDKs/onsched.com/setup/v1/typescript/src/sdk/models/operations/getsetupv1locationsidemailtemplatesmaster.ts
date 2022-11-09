import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSetupV1LocationsIdEmailTemplatesMasterPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSetupV1LocationsIdEmailTemplatesMasterRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSetupV1LocationsIdEmailTemplatesMasterPathParams;
}


export class GetSetupV1LocationsIdEmailTemplatesMasterResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  masterEmailTemplateSettingsViewModel?: shared.MasterEmailTemplateSettingsViewModel;

  @Metadata()
  statusCode: number;
}
