import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimDeviceBayTemplatesCreateRequest extends SpeakeasyBase {
    request: shared.WritableDeviceBayTemplateInput;
}
export declare class DcimDeviceBayTemplatesCreateResponse extends SpeakeasyBase {
    contentType: string;
    deviceBayTemplate?: shared.DeviceBayTemplate;
    statusCode: number;
}
