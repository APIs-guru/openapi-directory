import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IpamRirsReadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class IpamRirsReadRequest extends SpeakeasyBase {
    pathParams: IpamRirsReadPathParams;
}
export declare class IpamRirsReadResponse extends SpeakeasyBase {
    contentType: string;
    rir?: shared.Rir;
    statusCode: number;
}
