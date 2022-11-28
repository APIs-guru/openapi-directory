import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDomainPathParams extends SpeakeasyBase {
    domainId: string;
}
export declare class GetDomainHeaders extends SpeakeasyBase {
    trainingKey: string;
}
export declare class GetDomainRequest extends SpeakeasyBase {
    pathParams: GetDomainPathParams;
    headers: GetDomainHeaders;
}
export declare class GetDomainResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    domain?: shared.Domain;
    statusCode: number;
}
