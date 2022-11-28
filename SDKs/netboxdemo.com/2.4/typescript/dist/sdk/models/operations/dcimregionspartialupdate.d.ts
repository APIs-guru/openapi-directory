import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimRegionsPartialUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimRegionsPartialUpdateRequest extends SpeakeasyBase {
    pathParams: DcimRegionsPartialUpdatePathParams;
    request: shared.WritableRegionInput;
}
export declare class DcimRegionsPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    region?: shared.Region;
    statusCode: number;
}
