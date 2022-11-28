import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IpamVrfsUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class IpamVrfsUpdateRequest extends SpeakeasyBase {
    pathParams: IpamVrfsUpdatePathParams;
    request: shared.WritableVrfInput;
}
export declare class IpamVrfsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    vrf?: shared.Vrf;
}
