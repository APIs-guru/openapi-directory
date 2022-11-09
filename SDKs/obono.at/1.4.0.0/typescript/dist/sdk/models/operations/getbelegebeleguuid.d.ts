import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetBelegeBelegUuidPathParams extends SpeakeasyBase {
    belegUuid: string;
}
export declare class GetBelegeBelegUuidRequest extends SpeakeasyBase {
    pathParams: GetBelegeBelegUuidPathParams;
}
export declare class GetBelegeBelegUuidResponse extends SpeakeasyBase {
    beleg?: shared.Beleg;
    contentType: string;
    statusCode: number;
}
