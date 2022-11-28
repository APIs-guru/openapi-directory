import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IpamRirsUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class IpamRirsUpdateRequest extends SpeakeasyBase {
    pathParams: IpamRirsUpdatePathParams;
    request: shared.RirInput;
}
export declare class IpamRirsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    rir?: shared.Rir;
    statusCode: number;
}
