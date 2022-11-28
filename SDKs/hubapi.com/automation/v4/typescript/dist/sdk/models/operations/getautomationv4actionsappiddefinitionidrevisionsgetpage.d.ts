import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPagePathParams extends SpeakeasyBase {
    appId: number;
    definitionId: string;
}
export declare class GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageQueryParams extends SpeakeasyBase {
    after?: string;
    limit?: number;
}
export declare class GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageSecurity extends SpeakeasyBase {
    developerHapikey: shared.SchemeDeveloperHapikey;
}
export declare class GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageRequest extends SpeakeasyBase {
    pathParams: GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPagePathParams;
    queryParams: GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageQueryParams;
    security: GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageSecurity;
}
export declare class GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    collectionResponseActionRevisionForwardPaging?: shared.CollectionResponseActionRevisionForwardPaging;
    contentType: string;
    statusCode: number;
}
