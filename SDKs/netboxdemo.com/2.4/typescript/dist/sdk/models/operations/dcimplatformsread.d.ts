import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimPlatformsReadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimPlatformsReadRequest extends SpeakeasyBase {
    pathParams: DcimPlatformsReadPathParams;
}
export declare class DcimPlatformsReadResponse extends SpeakeasyBase {
    contentType: string;
    platform?: shared.Platform;
    statusCode: number;
}
