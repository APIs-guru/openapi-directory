import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAdministrationEntityHeaders extends SpeakeasyBase {
    token?: string;
}
export declare class GetAdministrationEntityRequest extends SpeakeasyBase {
    headers: GetAdministrationEntityHeaders;
}
export declare class GetAdministrationEntityResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    entities?: shared.Entity[];
    statusCode: number;
}
