import { SpeakeasyBase } from "../../../internal/utils";
import { MediaUrl } from "./mediaurl";
/**
 * Class BaseItem.
**/
export declare class BaseItem extends SpeakeasyBase {
    container?: string;
    dateLastSaved?: Date;
    extraIds?: string[];
    height?: number;
    isHd?: boolean;
    isShortcut?: boolean;
    remoteTrailers?: MediaUrl[];
    shortcutPath?: string;
    size?: number;
    supportsExternalTransfer?: boolean;
    width?: number;
}
