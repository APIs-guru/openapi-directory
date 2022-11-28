import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostRealmTestSmtpConnectionPathParams extends SpeakeasyBase {
    realm: string;
}
export declare class PostRealmTestSmtpConnectionRequest extends SpeakeasyBase {
    pathParams: PostRealmTestSmtpConnectionPathParams;
    request: Map<string, any>;
}
export declare class PostRealmTestSmtpConnectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
