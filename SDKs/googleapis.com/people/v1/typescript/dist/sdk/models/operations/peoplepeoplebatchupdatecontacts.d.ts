import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PeoplePeopleBatchUpdateContactsQueryParams extends SpeakeasyBase {
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
export declare class PeoplePeopleBatchUpdateContactsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PeoplePeopleBatchUpdateContactsRequest extends SpeakeasyBase {
    queryParams: PeoplePeopleBatchUpdateContactsQueryParams;
    request?: shared.BatchUpdateContactsRequestInput;
    security: PeoplePeopleBatchUpdateContactsSecurity;
}
export declare class PeoplePeopleBatchUpdateContactsResponse extends SpeakeasyBase {
    batchUpdateContactsResponse?: shared.BatchUpdateContactsResponse;
    contentType: string;
    statusCode: number;
}
