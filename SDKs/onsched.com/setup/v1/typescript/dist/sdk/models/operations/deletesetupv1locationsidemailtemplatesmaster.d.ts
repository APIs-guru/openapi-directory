import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteSetupV1LocationsIdEmailTemplatesMasterPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteSetupV1LocationsIdEmailTemplatesMasterRequest extends SpeakeasyBase {
    pathParams: DeleteSetupV1LocationsIdEmailTemplatesMasterPathParams;
}
export declare class DeleteSetupV1LocationsIdEmailTemplatesMasterResponse extends SpeakeasyBase {
    contentType: string;
    masterEmailTemplateSettingsViewModel?: shared.MasterEmailTemplateSettingsViewModel;
    statusCode: number;
}
