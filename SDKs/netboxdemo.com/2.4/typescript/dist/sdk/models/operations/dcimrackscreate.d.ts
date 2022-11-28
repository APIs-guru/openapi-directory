import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimRacksCreateRequest extends SpeakeasyBase {
    request: shared.WritableRackInput;
}
export declare class DcimRacksCreateResponse extends SpeakeasyBase {
    contentType: string;
    rack?: shared.Rack;
    statusCode: number;
}
