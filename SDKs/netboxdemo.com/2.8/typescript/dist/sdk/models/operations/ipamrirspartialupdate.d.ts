import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IpamRirsPartialUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class IpamRirsPartialUpdateRequest extends SpeakeasyBase {
    pathParams: IpamRirsPartialUpdatePathParams;
    request: shared.RirInput;
}
export declare class IpamRirsPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    rir?: shared.Rir;
    statusCode: number;
}
