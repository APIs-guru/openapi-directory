import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IpamVrfsPartialUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class IpamVrfsPartialUpdateRequest extends SpeakeasyBase {
    pathParams: IpamVrfsPartialUpdatePathParams;
    request: shared.WritableVrfInput;
}
export declare class IpamVrfsPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    vrf?: shared.Vrf;
}
