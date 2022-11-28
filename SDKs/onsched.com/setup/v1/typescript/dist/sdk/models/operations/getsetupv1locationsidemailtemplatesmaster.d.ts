import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSetupV1LocationsIdEmailTemplatesMasterPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSetupV1LocationsIdEmailTemplatesMasterRequest extends SpeakeasyBase {
    pathParams: GetSetupV1LocationsIdEmailTemplatesMasterPathParams;
}
export declare class GetSetupV1LocationsIdEmailTemplatesMasterResponse extends SpeakeasyBase {
    contentType: string;
    masterEmailTemplateSettingsViewModel?: shared.MasterEmailTemplateSettingsViewModel;
    statusCode: number;
}
