import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBelegPathParams extends SpeakeasyBase {
    belegUuid: string;
    registrierkasseUuid: string;
}
export declare class GetBelegRequest extends SpeakeasyBase {
    pathParams: GetBelegPathParams;
}
export declare class GetBelegResponse extends SpeakeasyBase {
    beleg?: shared.Beleg;
    contentType: string;
    statusCode: number;
}
