import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdPathParams extends SpeakeasyBase {
    appId: number;
    definitionId: string;
    revisionId: string;
}
export declare class GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdSecurity extends SpeakeasyBase {
    developerHapikey: shared.SchemeDeveloperHapikey;
}
export declare class GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdRequest extends SpeakeasyBase {
    pathParams: GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdPathParams;
    security: GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdSecurity;
}
export declare class GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdResponse extends SpeakeasyBase {
    actionRevision?: shared.ActionRevision;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
