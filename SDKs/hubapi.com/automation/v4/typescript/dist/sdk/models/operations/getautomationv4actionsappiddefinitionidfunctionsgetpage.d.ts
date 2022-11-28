import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPagePathParams extends SpeakeasyBase {
    appId: number;
    definitionId: string;
}
export declare class GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPageSecurity extends SpeakeasyBase {
    developerHapikey: shared.SchemeDeveloperHapikey;
}
export declare class GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPageRequest extends SpeakeasyBase {
    pathParams: GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPagePathParams;
    security: GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPageSecurity;
}
export declare class GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    collectionResponseActionFunctionIdentifierNoPaging?: shared.CollectionResponseActionFunctionIdentifierNoPaging;
    contentType: string;
    statusCode: number;
}
