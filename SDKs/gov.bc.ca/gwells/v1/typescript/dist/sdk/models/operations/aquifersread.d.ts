import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AquifersReadPathParams extends SpeakeasyBase {
    aquiferId: number;
}
export declare class AquifersReadRequest extends SpeakeasyBase {
    pathParams: AquifersReadPathParams;
}
export declare class AquifersReadResponse extends SpeakeasyBase {
    aquifer?: shared.Aquifer;
    contentType: string;
    statusCode: number;
}
