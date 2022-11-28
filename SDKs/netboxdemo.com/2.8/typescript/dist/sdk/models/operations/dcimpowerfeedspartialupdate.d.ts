import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimPowerFeedsPartialUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimPowerFeedsPartialUpdateRequest extends SpeakeasyBase {
    pathParams: DcimPowerFeedsPartialUpdatePathParams;
    request: shared.WritablePowerFeedInput;
}
export declare class DcimPowerFeedsPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    powerFeed?: shared.PowerFeed;
    statusCode: number;
}
