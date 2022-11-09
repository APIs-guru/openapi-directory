import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostSetupV1LocationsIdEmailTemplatesMasterPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostSetupV1LocationsIdEmailTemplatesMasterRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  masterTemplateSettingsInputModel?: shared.MasterTemplateSettingsInputModel;

  @Metadata({ data: "request, media_type=application/json" })
  masterTemplateSettingsInputModel1?: shared.MasterTemplateSettingsInputModel;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  masterTemplateSettingsInputModel2?: shared.MasterTemplateSettingsInputModel;

  @Metadata({ data: "request, media_type=text/json" })
  masterTemplateSettingsInputModel3?: shared.MasterTemplateSettingsInputModel;
}


export class PostSetupV1LocationsIdEmailTemplatesMasterRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostSetupV1LocationsIdEmailTemplatesMasterPathParams;

  @Metadata()
  request?: PostSetupV1LocationsIdEmailTemplatesMasterRequests;
}


export class PostSetupV1LocationsIdEmailTemplatesMasterResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  masterEmailTemplateSettingsViewModel?: shared.MasterEmailTemplateSettingsViewModel;

  @Metadata()
  statusCode: number;
}
