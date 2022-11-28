import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimPlatformsCreateRequest extends SpeakeasyBase {
    request: shared.WritablePlatformInput;
}
export declare class DcimPlatformsCreateResponse extends SpeakeasyBase {
    contentType: string;
    platform?: shared.Platform;
    statusCode: number;
}
