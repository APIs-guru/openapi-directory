import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeleteAutomationV4ActionsAppIdDefinitionIdArchivePathParams extends SpeakeasyBase {
    appId: number;
    definitionId: string;
}
export declare class DeleteAutomationV4ActionsAppIdDefinitionIdArchiveSecurity extends SpeakeasyBase {
    developerHapikey: shared.SchemeDeveloperHapikey;
}
export declare class DeleteAutomationV4ActionsAppIdDefinitionIdArchiveRequest extends SpeakeasyBase {
    pathParams: DeleteAutomationV4ActionsAppIdDefinitionIdArchivePathParams;
    security: DeleteAutomationV4ActionsAppIdDefinitionIdArchiveSecurity;
}
export declare class DeleteAutomationV4ActionsAppIdDefinitionIdArchiveResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
