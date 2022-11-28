import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GamesEventsListDefinitionsQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    language?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class GamesEventsListDefinitionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GamesEventsListDefinitionsRequest extends SpeakeasyBase {
    queryParams: GamesEventsListDefinitionsQueryParams;
    security: GamesEventsListDefinitionsSecurity;
}
export declare class GamesEventsListDefinitionsResponse extends SpeakeasyBase {
    contentType: string;
    eventDefinitionListResponse?: shared.EventDefinitionListResponse;
    statusCode: number;
}
