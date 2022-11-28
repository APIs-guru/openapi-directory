import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MirrorAccountsInsertPathParams extends SpeakeasyBase {
    accountName: string;
    accountType: string;
    userToken: string;
}
export declare class MirrorAccountsInsertQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class MirrorAccountsInsertRequest extends SpeakeasyBase {
    pathParams: MirrorAccountsInsertPathParams;
    queryParams: MirrorAccountsInsertQueryParams;
    request?: shared.Account;
}
export declare class MirrorAccountsInsertResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
