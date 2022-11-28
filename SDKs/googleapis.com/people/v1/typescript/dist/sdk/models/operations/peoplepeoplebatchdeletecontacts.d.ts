import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PeoplePeopleBatchDeleteContactsQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class PeoplePeopleBatchDeleteContactsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PeoplePeopleBatchDeleteContactsRequest extends SpeakeasyBase {
    queryParams: PeoplePeopleBatchDeleteContactsQueryParams;
    request?: shared.BatchDeleteContactsRequest;
    security: PeoplePeopleBatchDeleteContactsSecurity;
}
export declare class PeoplePeopleBatchDeleteContactsResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
