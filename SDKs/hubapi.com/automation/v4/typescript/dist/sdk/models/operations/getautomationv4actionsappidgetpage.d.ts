import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetAutomationV4ActionsAppIdGetPagePathParams extends SpeakeasyBase {
    appId: number;
}
export declare class GetAutomationV4ActionsAppIdGetPageQueryParams extends SpeakeasyBase {
    after?: string;
    archived?: boolean;
    limit?: number;
}
export declare class GetAutomationV4ActionsAppIdGetPageSecurity extends SpeakeasyBase {
    developerHapikey: shared.SchemeDeveloperHapikey;
}
export declare class GetAutomationV4ActionsAppIdGetPageRequest extends SpeakeasyBase {
    pathParams: GetAutomationV4ActionsAppIdGetPagePathParams;
    queryParams: GetAutomationV4ActionsAppIdGetPageQueryParams;
    security: GetAutomationV4ActionsAppIdGetPageSecurity;
}
export declare class GetAutomationV4ActionsAppIdGetPageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    collectionResponseExtensionActionDefinitionForwardPaging?: shared.CollectionResponseExtensionActionDefinitionForwardPaging;
    contentType: string;
    statusCode: number;
}
