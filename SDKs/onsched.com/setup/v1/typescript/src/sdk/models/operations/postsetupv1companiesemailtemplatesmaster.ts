import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostSetupV1CompaniesEmailTemplatesMasterRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  masterTemplateSettingsInputModel?: shared.MasterTemplateSettingsInputModel;

  @Metadata({ data: "request, media_type=application/json" })
  masterTemplateSettingsInputModel1?: shared.MasterTemplateSettingsInputModel;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  masterTemplateSettingsInputModel2?: shared.MasterTemplateSettingsInputModel;

  @Metadata({ data: "request, media_type=text/json" })
  masterTemplateSettingsInputModel3?: shared.MasterTemplateSettingsInputModel;
}


export class PostSetupV1CompaniesEmailTemplatesMasterRequest extends SpeakeasyBase {
  @Metadata()
  request?: PostSetupV1CompaniesEmailTemplatesMasterRequests;
}


export class PostSetupV1CompaniesEmailTemplatesMasterResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  masterEmailTemplateSettingsViewModel?: shared.MasterEmailTemplateSettingsViewModel;

  @Metadata()
  statusCode: number;
}
