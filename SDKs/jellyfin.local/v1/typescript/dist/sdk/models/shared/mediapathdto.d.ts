import { SpeakeasyBase } from "../../../internal/utils";
import { MediaPathInfo } from "./mediapathinfo";
/**
 * Media Path dto.
**/
export declare class MediaPathDto extends SpeakeasyBase {
    name: string;
    path?: string;
    pathInfo?: MediaPathInfo;
}
