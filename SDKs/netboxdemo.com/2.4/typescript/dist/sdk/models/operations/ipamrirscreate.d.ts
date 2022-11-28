import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IpamRirsCreateRequest extends SpeakeasyBase {
    request: shared.RirInput;
}
export declare class IpamRirsCreateResponse extends SpeakeasyBase {
    contentType: string;
    rir?: shared.Rir;
    statusCode: number;
}
