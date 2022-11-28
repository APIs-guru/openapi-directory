import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateKeyQueryParams extends SpeakeasyBase {
    app: string;
}
export declare class CreateKeySecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class CreateKeyRequest extends SpeakeasyBase {
    queryParams: CreateKeyQueryParams;
    security: CreateKeySecurity;
}
export declare class CreateKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
