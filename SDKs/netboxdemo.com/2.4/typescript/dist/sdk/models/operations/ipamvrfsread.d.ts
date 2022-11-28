import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IpamVrfsReadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class IpamVrfsReadRequest extends SpeakeasyBase {
    pathParams: IpamVrfsReadPathParams;
}
export declare class IpamVrfsReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    vrf?: shared.Vrf;
}
