import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimPowerFeedsCreateRequest extends SpeakeasyBase {
    request: shared.WritablePowerFeedInput;
}
export declare class DcimPowerFeedsCreateResponse extends SpeakeasyBase {
    contentType: string;
    powerFeed?: shared.PowerFeed;
    statusCode: number;
}
