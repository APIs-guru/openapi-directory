import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteSetupV1CompaniesEmailTemplatesMasterResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  masterEmailTemplateSettingsViewModel?: shared.MasterEmailTemplateSettingsViewModel;

  @Metadata()
  statusCode: number;
}
