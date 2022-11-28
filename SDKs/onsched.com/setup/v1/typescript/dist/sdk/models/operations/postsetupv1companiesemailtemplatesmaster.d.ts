import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostSetupV1CompaniesEmailTemplatesMasterRequests extends SpeakeasyBase {
    masterTemplateSettingsInputModel?: shared.MasterTemplateSettingsInputModel;
    masterTemplateSettingsInputModel1?: shared.MasterTemplateSettingsInputModel;
    masterTemplateSettingsInputModel2?: shared.MasterTemplateSettingsInputModel;
    masterTemplateSettingsInputModel3?: shared.MasterTemplateSettingsInputModel;
}
export declare class PostSetupV1CompaniesEmailTemplatesMasterRequest extends SpeakeasyBase {
    request?: PostSetupV1CompaniesEmailTemplatesMasterRequests;
}
export declare class PostSetupV1CompaniesEmailTemplatesMasterResponse extends SpeakeasyBase {
    contentType: string;
    masterEmailTemplateSettingsViewModel?: shared.MasterEmailTemplateSettingsViewModel;
    statusCode: number;
}
