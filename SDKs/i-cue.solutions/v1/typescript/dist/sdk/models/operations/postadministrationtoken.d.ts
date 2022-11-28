import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostAdministrationTokenHeaders extends SpeakeasyBase {
    token?: string;
}
export declare class PostAdministrationTokenRequests extends SpeakeasyBase {
    newTokenRequest?: shared.NewTokenRequest;
    newTokenRequest1?: shared.NewTokenRequest;
    newTokenRequest2?: shared.NewTokenRequest;
}
export declare class PostAdministrationTokenRequest extends SpeakeasyBase {
    headers: PostAdministrationTokenHeaders;
    request?: PostAdministrationTokenRequests;
}
export declare class PostAdministrationTokenResponse extends SpeakeasyBase {
    contentType: string;
    postAdministrationToken200ApplicationJsonUuidString?: string;
    postAdministrationToken200TextJsonUuidString?: string;
    postAdministrationToken200TextPlainUuidString?: string;
    statusCode: number;
}
