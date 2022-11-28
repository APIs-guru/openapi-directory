import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimDeviceBayTemplatesUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimDeviceBayTemplatesUpdateRequest extends SpeakeasyBase {
    pathParams: DcimDeviceBayTemplatesUpdatePathParams;
    request: shared.WritableDeviceBayTemplateInput;
}
export declare class DcimDeviceBayTemplatesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    deviceBayTemplate?: shared.DeviceBayTemplate;
    statusCode: number;
}
