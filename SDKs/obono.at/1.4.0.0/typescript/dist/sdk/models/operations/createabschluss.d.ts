import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateAbschlussPathParams extends SpeakeasyBase {
    registrierkasseUuid: string;
}
export declare class CreateAbschlussRequest extends SpeakeasyBase {
    pathParams: CreateAbschlussPathParams;
    request: shared.Abschlussbelegdaten;
}
export declare class CreateAbschlussResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
