import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScrollDirectionEnum } from "./scrolldirectionenum";
import { SortOrderEnum } from "./sortorderenum";



// DisplayPreferencesDto
/** 
 * Defines the display preferences for any item that supports them (usually Folders).
**/
export class DisplayPreferencesDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Client" })
  client?: string;

  @SpeakeasyMetadata({ data: "json, name=CustomPrefs" })
  customPrefs?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=IndexBy" })
  indexBy?: string;

  @SpeakeasyMetadata({ data: "json, name=PrimaryImageHeight" })
  primaryImageHeight?: number;

  @SpeakeasyMetadata({ data: "json, name=PrimaryImageWidth" })
  primaryImageWidth?: number;

  @SpeakeasyMetadata({ data: "json, name=RememberIndexing" })
  rememberIndexing?: boolean;

  @SpeakeasyMetadata({ data: "json, name=RememberSorting" })
  rememberSorting?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ScrollDirection" })
  scrollDirection?: ScrollDirectionEnum;

  @SpeakeasyMetadata({ data: "json, name=ShowBackdrop" })
  showBackdrop?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ShowSidebar" })
  showSidebar?: boolean;

  @SpeakeasyMetadata({ data: "json, name=SortBy" })
  sortBy?: string;

  @SpeakeasyMetadata({ data: "json, name=SortOrder" })
  sortOrder?: SortOrderEnum;

  @SpeakeasyMetadata({ data: "json, name=ViewType" })
  viewType?: string;
}
