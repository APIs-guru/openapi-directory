import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteSetupV1CompaniesEmailTemplatesMasterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  masterEmailTemplateSettingsViewModel?: shared.MasterEmailTemplateSettingsViewModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
