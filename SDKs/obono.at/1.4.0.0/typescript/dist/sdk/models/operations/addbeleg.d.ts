import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AddBelegPathParams extends SpeakeasyBase {
    belegUuid: string;
    registrierkasseUuid: string;
}
export declare class AddBelegRequest extends SpeakeasyBase {
    pathParams: AddBelegPathParams;
    request: shared.Belegdaten;
}
export declare class AddBelegResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
