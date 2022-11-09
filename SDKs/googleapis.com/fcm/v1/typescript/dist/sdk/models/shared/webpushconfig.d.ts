import { SpeakeasyBase } from "../../../internal/utils/utils";
import { WebpushFcmOptions } from "./webpushfcmoptions";
/**
 * [Webpush protocol](https://tools.ietf.org/html/rfc8030) options.
**/
export declare class WebpushConfig extends SpeakeasyBase {
    data?: Map<string, string>;
    fcmOptions?: WebpushFcmOptions;
    headers?: Map<string, string>;
    notification?: Map<string, any>;
}
