import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimPowerFeedsUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimPowerFeedsUpdateRequest extends SpeakeasyBase {
    pathParams: DcimPowerFeedsUpdatePathParams;
    request: shared.WritablePowerFeedInput;
}
export declare class DcimPowerFeedsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    powerFeed?: shared.PowerFeed;
    statusCode: number;
}
