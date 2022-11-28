import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimPowerOutletTemplatesReadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimPowerOutletTemplatesReadRequest extends SpeakeasyBase {
    pathParams: DcimPowerOutletTemplatesReadPathParams;
}
export declare class DcimPowerOutletTemplatesReadResponse extends SpeakeasyBase {
    contentType: string;
    powerOutletTemplate?: shared.PowerOutletTemplate;
    statusCode: number;
}
