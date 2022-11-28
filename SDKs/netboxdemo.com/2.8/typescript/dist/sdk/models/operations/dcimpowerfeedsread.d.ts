import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimPowerFeedsReadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimPowerFeedsReadRequest extends SpeakeasyBase {
    pathParams: DcimPowerFeedsReadPathParams;
}
export declare class DcimPowerFeedsReadResponse extends SpeakeasyBase {
    contentType: string;
    powerFeed?: shared.PowerFeed;
    statusCode: number;
}
