import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PeoplePeopleBatchCreateContactsQueryParams extends SpeakeasyBase {
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
export declare class PeoplePeopleBatchCreateContactsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PeoplePeopleBatchCreateContactsRequest extends SpeakeasyBase {
    queryParams: PeoplePeopleBatchCreateContactsQueryParams;
    request?: shared.BatchCreateContactsRequestInput;
    security: PeoplePeopleBatchCreateContactsSecurity;
}
export declare class PeoplePeopleBatchCreateContactsResponse extends SpeakeasyBase {
    batchCreateContactsResponse?: shared.BatchCreateContactsResponse;
    contentType: string;
    statusCode: number;
}
