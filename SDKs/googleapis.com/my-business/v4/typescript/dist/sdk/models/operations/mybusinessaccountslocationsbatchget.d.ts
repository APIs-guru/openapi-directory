import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinessAccountsLocationsBatchGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class MybusinessAccountsLocationsBatchGetQueryParams extends SpeakeasyBase {
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
export declare class MybusinessAccountsLocationsBatchGetRequest extends SpeakeasyBase {
    pathParams: MybusinessAccountsLocationsBatchGetPathParams;
    queryParams: MybusinessAccountsLocationsBatchGetQueryParams;
    request?: shared.BatchGetLocationsRequest;
}
export declare class MybusinessAccountsLocationsBatchGetResponse extends SpeakeasyBase {
    batchGetLocationsResponse?: shared.BatchGetLocationsResponse;
    contentType: string;
    statusCode: number;
}
