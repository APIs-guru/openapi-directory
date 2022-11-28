import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimRacksReadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimRacksReadRequest extends SpeakeasyBase {
    pathParams: DcimRacksReadPathParams;
}
export declare class DcimRacksReadResponse extends SpeakeasyBase {
    contentType: string;
    rack?: shared.Rack;
    statusCode: number;
}
