import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPersonQueryParams extends SpeakeasyBase {
    prefix?: string;
}
export declare class GetPersonSecurity extends SpeakeasyBase {
    basicAuthentication: shared.SchemeBasicAuthentication;
}
export declare class GetPersonRequest extends SpeakeasyBase {
    queryParams: GetPersonQueryParams;
    security: GetPersonSecurity;
}
export declare class GetPersonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
