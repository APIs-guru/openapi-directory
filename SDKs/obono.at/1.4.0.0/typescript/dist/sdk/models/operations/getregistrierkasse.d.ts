import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetRegistrierkassePathParams extends SpeakeasyBase {
    registrierkasseUuid: string;
}
export declare class GetRegistrierkasseRequest extends SpeakeasyBase {
    pathParams: GetRegistrierkassePathParams;
}
export declare class GetRegistrierkasseResponse extends SpeakeasyBase {
    contentType: string;
    registrierkasse?: shared.Registrierkasse;
    statusCode: number;
}
