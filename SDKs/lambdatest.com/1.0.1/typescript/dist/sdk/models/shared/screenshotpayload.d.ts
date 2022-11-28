import { SpeakeasyBase } from "../../../internal/utils";
import { Browsers } from "./browsers";
export declare class ScreenshotPayloadConfigs extends SpeakeasyBase {
    macosMojave?: Browsers;
    windows10?: Browsers;
}
export declare class ScreenshotPayload extends SpeakeasyBase {
    callbackUrl?: string;
    configs?: ScreenshotPayloadConfigs;
    deferTime?: number;
    email?: boolean;
    macRes?: string;
    password?: string;
    tunnel?: boolean;
    tunnelIdentifier?: string;
    url?: string;
    username?: string;
    winRes?: string;
}
