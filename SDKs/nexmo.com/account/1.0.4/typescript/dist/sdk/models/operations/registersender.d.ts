import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const RegisterSenderServerList: readonly ["https://rest.nexmo.com"];
export declare class RegisterSenderQueryParams extends SpeakeasyBase {
    apiKey: string;
    apiSecret: string;
}
export declare class RegisterSenderRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: RegisterSenderQueryParams;
    request: shared.RegisterEmailRequest;
}
export declare class RegisterSenderResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    registerEmailResponse?: shared.RegisterEmailResponse;
}
