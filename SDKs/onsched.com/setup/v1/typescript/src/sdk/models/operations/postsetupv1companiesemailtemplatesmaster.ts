import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostSetupV1CompaniesEmailTemplatesMasterRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  masterTemplateSettingsInputModel?: shared.MasterTemplateSettingsInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  masterTemplateSettingsInputModel1?: shared.MasterTemplateSettingsInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  masterTemplateSettingsInputModel2?: shared.MasterTemplateSettingsInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  masterTemplateSettingsInputModel3?: shared.MasterTemplateSettingsInputModel;
}


export class PostSetupV1CompaniesEmailTemplatesMasterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request?: PostSetupV1CompaniesEmailTemplatesMasterRequests;
}


export class PostSetupV1CompaniesEmailTemplatesMasterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  masterEmailTemplateSettingsViewModel?: shared.MasterEmailTemplateSettingsViewModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
