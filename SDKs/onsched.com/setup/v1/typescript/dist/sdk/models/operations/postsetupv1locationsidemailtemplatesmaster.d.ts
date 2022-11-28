import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostSetupV1LocationsIdEmailTemplatesMasterPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PostSetupV1LocationsIdEmailTemplatesMasterRequests extends SpeakeasyBase {
    masterTemplateSettingsInputModel?: shared.MasterTemplateSettingsInputModel;
    masterTemplateSettingsInputModel1?: shared.MasterTemplateSettingsInputModel;
    masterTemplateSettingsInputModel2?: shared.MasterTemplateSettingsInputModel;
    masterTemplateSettingsInputModel3?: shared.MasterTemplateSettingsInputModel;
}
export declare class PostSetupV1LocationsIdEmailTemplatesMasterRequest extends SpeakeasyBase {
    pathParams: PostSetupV1LocationsIdEmailTemplatesMasterPathParams;
    request?: PostSetupV1LocationsIdEmailTemplatesMasterRequests;
}
export declare class PostSetupV1LocationsIdEmailTemplatesMasterResponse extends SpeakeasyBase {
    contentType: string;
    masterEmailTemplateSettingsViewModel?: shared.MasterEmailTemplateSettingsViewModel;
    statusCode: number;
}
