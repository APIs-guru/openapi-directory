import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinessaccountmanagementLocationsTransferPathParams extends SpeakeasyBase {
    name: string;
}
export declare class MybusinessaccountmanagementLocationsTransferQueryParams extends SpeakeasyBase {
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
export declare class MybusinessaccountmanagementLocationsTransferRequest extends SpeakeasyBase {
    pathParams: MybusinessaccountmanagementLocationsTransferPathParams;
    queryParams: MybusinessaccountmanagementLocationsTransferQueryParams;
    request?: shared.TransferLocationRequest;
}
export declare class MybusinessaccountmanagementLocationsTransferResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
