import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RestartApplicationSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class RestartApplicationRequest extends SpeakeasyBase {
    security: RestartApplicationSecurity;
}
export declare class RestartApplicationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
