import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimPlatformsPartialUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimPlatformsPartialUpdateRequest extends SpeakeasyBase {
    pathParams: DcimPlatformsPartialUpdatePathParams;
    request: shared.WritablePlatformInput;
}
export declare class DcimPlatformsPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    platform?: shared.Platform;
    statusCode: number;
}
