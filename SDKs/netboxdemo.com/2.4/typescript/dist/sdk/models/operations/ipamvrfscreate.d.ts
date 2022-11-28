import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IpamVrfsCreateRequest extends SpeakeasyBase {
    request: shared.WritableVrfInput;
}
export declare class IpamVrfsCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    vrf?: shared.Vrf;
}
