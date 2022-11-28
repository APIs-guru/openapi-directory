import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimPlatformsUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimPlatformsUpdateRequest extends SpeakeasyBase {
    pathParams: DcimPlatformsUpdatePathParams;
    request: shared.WritablePlatformInput;
}
export declare class DcimPlatformsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    platform?: shared.Platform;
    statusCode: number;
}
