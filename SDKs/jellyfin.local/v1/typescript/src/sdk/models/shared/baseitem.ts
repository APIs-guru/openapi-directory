import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MediaUrl } from "./mediaurl";



// BaseItem
/** 
 * Class BaseItem.
**/
export class BaseItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Container" })
  container?: string;

  @SpeakeasyMetadata({ data: "json, name=DateLastSaved" })
  dateLastSaved?: Date;

  @SpeakeasyMetadata({ data: "json, name=ExtraIds" })
  extraIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=Height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=IsHD" })
  isHd?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsShortcut" })
  isShortcut?: boolean;

  @SpeakeasyMetadata({ data: "json, name=RemoteTrailers", elemType: MediaUrl })
  remoteTrailers?: MediaUrl[];

  @SpeakeasyMetadata({ data: "json, name=ShortcutPath" })
  shortcutPath?: string;

  @SpeakeasyMetadata({ data: "json, name=Size" })
  size?: number;

  @SpeakeasyMetadata({ data: "json, name=SupportsExternalTransfer" })
  supportsExternalTransfer?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Width" })
  width?: number;
}
