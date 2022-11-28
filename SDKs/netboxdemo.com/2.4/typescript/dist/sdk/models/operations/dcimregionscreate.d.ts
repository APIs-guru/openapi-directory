import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimRegionsCreateRequest extends SpeakeasyBase {
    request: shared.WritableRegionInput;
}
export declare class DcimRegionsCreateResponse extends SpeakeasyBase {
    contentType: string;
    region?: shared.Region;
    statusCode: number;
}
