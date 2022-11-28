import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutAdministrationEntityHeaders extends SpeakeasyBase {
    token?: string;
}
export declare class PutAdministrationEntityRequests extends SpeakeasyBase {
    toggleRequest?: shared.ToggleRequest;
    toggleRequest1?: shared.ToggleRequest;
    toggleRequest2?: shared.ToggleRequest;
}
export declare class PutAdministrationEntityRequest extends SpeakeasyBase {
    headers: PutAdministrationEntityHeaders;
    request?: PutAdministrationEntityRequests;
}
export declare class PutAdministrationEntityResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
