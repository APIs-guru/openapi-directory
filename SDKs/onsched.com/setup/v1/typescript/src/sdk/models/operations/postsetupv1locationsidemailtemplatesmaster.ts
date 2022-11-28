import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostSetupV1LocationsIdEmailTemplatesMasterPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostSetupV1LocationsIdEmailTemplatesMasterRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  masterTemplateSettingsInputModel?: shared.MasterTemplateSettingsInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  masterTemplateSettingsInputModel1?: shared.MasterTemplateSettingsInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  masterTemplateSettingsInputModel2?: shared.MasterTemplateSettingsInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  masterTemplateSettingsInputModel3?: shared.MasterTemplateSettingsInputModel;
}


export class PostSetupV1LocationsIdEmailTemplatesMasterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostSetupV1LocationsIdEmailTemplatesMasterPathParams;

  @SpeakeasyMetadata()
  request?: PostSetupV1LocationsIdEmailTemplatesMasterRequests;
}


export class PostSetupV1LocationsIdEmailTemplatesMasterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  masterEmailTemplateSettingsViewModel?: shared.MasterEmailTemplateSettingsViewModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
