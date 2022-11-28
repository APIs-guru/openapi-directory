import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimRacksPartialUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimRacksPartialUpdateRequest extends SpeakeasyBase {
    pathParams: DcimRacksPartialUpdatePathParams;
    request: shared.WritableRackInput;
}
export declare class DcimRacksPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    rack?: shared.Rack;
    statusCode: number;
}
