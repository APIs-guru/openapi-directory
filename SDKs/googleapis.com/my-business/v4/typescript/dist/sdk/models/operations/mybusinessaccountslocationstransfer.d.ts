import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinessAccountsLocationsTransferPathParams extends SpeakeasyBase {
    name: string;
}
export declare class MybusinessAccountsLocationsTransferQueryParams extends SpeakeasyBase {
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
export declare class MybusinessAccountsLocationsTransferRequest extends SpeakeasyBase {
    pathParams: MybusinessAccountsLocationsTransferPathParams;
    queryParams: MybusinessAccountsLocationsTransferQueryParams;
    request?: shared.TransferLocationRequest;
}
export declare class MybusinessAccountsLocationsTransferResponse extends SpeakeasyBase {
    contentType: string;
    location?: shared.Location;
    statusCode: number;
}
