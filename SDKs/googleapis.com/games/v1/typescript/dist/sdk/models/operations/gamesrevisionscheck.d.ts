import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GamesRevisionsCheckQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    clientRevision: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class GamesRevisionsCheckSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GamesRevisionsCheckRequest extends SpeakeasyBase {
    queryParams: GamesRevisionsCheckQueryParams;
    security: GamesRevisionsCheckSecurity;
}
export declare class GamesRevisionsCheckResponse extends SpeakeasyBase {
    contentType: string;
    revisionCheckResponse?: shared.RevisionCheckResponse;
    statusCode: number;
}
