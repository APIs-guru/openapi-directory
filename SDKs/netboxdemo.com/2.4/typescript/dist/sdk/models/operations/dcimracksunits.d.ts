import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimRacksUnitsPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimRacksUnitsRequest extends SpeakeasyBase {
    pathParams: DcimRacksUnitsPathParams;
}
export declare class DcimRacksUnitsResponse extends SpeakeasyBase {
    contentType: string;
    rack?: shared.Rack;
    statusCode: number;
}
