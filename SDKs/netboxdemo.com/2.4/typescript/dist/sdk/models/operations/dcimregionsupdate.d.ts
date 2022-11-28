import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimRegionsUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimRegionsUpdateRequest extends SpeakeasyBase {
    pathParams: DcimRegionsUpdatePathParams;
    request: shared.WritableRegionInput;
}
export declare class DcimRegionsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    region?: shared.Region;
    statusCode: number;
}
