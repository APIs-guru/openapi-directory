import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimRacksUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimRacksUpdateRequest extends SpeakeasyBase {
    pathParams: DcimRacksUpdatePathParams;
    request: shared.WritableRackInput;
}
export declare class DcimRacksUpdateResponse extends SpeakeasyBase {
    contentType: string;
    rack?: shared.Rack;
    statusCode: number;
}
