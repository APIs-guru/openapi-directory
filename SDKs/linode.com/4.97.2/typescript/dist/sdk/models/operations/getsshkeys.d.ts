import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSshKeysQueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
}
export declare class GetSshKeysSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetSshKeys200ApplicationJson extends SpeakeasyBase {
    data?: shared.SshKey[];
    page?: number;
    pages?: number;
    results?: number;
}
export declare class GetSshKeysDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetSshKeysRequest extends SpeakeasyBase {
    queryParams: GetSshKeysQueryParams;
    security: GetSshKeysSecurity;
}
export declare class GetSshKeysResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getSshKeys200ApplicationJsonObject?: GetSshKeys200ApplicationJson;
    getSshKeysDefaultApplicationJsonObject?: GetSshKeysDefaultApplicationJson;
}
