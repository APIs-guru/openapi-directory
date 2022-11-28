import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimDeviceBayTemplatesPartialUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimDeviceBayTemplatesPartialUpdateRequest extends SpeakeasyBase {
    pathParams: DcimDeviceBayTemplatesPartialUpdatePathParams;
    request: shared.WritableDeviceBayTemplateInput;
}
export declare class DcimDeviceBayTemplatesPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    deviceBayTemplate?: shared.DeviceBayTemplate;
    statusCode: number;
}
