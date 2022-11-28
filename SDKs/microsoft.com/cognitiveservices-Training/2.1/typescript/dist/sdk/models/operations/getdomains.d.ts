import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDomainsHeaders extends SpeakeasyBase {
    trainingKey: string;
}
export declare class GetDomainsRequest extends SpeakeasyBase {
    headers: GetDomainsHeaders;
}
export declare class GetDomainsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    domains?: shared.Domain[];
    statusCode: number;
}
