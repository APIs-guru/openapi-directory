import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimDeviceBayTemplatesReadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimDeviceBayTemplatesReadRequest extends SpeakeasyBase {
    pathParams: DcimDeviceBayTemplatesReadPathParams;
}
export declare class DcimDeviceBayTemplatesReadResponse extends SpeakeasyBase {
    contentType: string;
    deviceBayTemplate?: shared.DeviceBayTemplate;
    statusCode: number;
}
