import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MediaUrl } from "./mediaurl";


// BaseItem
/** 
 * Class BaseItem.
**/
export class BaseItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=Container" })
  container?: string;

  @Metadata({ data: "json, name=DateLastSaved" })
  dateLastSaved?: Date;

  @Metadata({ data: "json, name=ExtraIds" })
  extraIds?: string[];

  @Metadata({ data: "json, name=Height" })
  height?: number;

  @Metadata({ data: "json, name=IsHD" })
  isHd?: boolean;

  @Metadata({ data: "json, name=IsShortcut" })
  isShortcut?: boolean;

  @Metadata({ data: "json, name=RemoteTrailers", elemType: shared.MediaUrl })
  remoteTrailers?: MediaUrl[];

  @Metadata({ data: "json, name=ShortcutPath" })
  shortcutPath?: string;

  @Metadata({ data: "json, name=Size" })
  size?: number;

  @Metadata({ data: "json, name=SupportsExternalTransfer" })
  supportsExternalTransfer?: boolean;

  @Metadata({ data: "json, name=Width" })
  width?: number;
}
