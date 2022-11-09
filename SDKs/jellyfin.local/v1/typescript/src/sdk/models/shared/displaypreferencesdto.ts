import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ScrollDirectionEnum } from "./scrolldirectionenum";
import { SortOrderEnum } from "./sortorderenum";


// DisplayPreferencesDto
/** 
 * Defines the display preferences for any item that supports them (usually Folders).
**/
export class DisplayPreferencesDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=Client" })
  client?: string;

  @Metadata({ data: "json, name=CustomPrefs" })
  customPrefs?: Map<string, string>;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=IndexBy" })
  indexBy?: string;

  @Metadata({ data: "json, name=PrimaryImageHeight" })
  primaryImageHeight?: number;

  @Metadata({ data: "json, name=PrimaryImageWidth" })
  primaryImageWidth?: number;

  @Metadata({ data: "json, name=RememberIndexing" })
  rememberIndexing?: boolean;

  @Metadata({ data: "json, name=RememberSorting" })
  rememberSorting?: boolean;

  @Metadata({ data: "json, name=ScrollDirection" })
  scrollDirection?: ScrollDirectionEnum;

  @Metadata({ data: "json, name=ShowBackdrop" })
  showBackdrop?: boolean;

  @Metadata({ data: "json, name=ShowSidebar" })
  showSidebar?: boolean;

  @Metadata({ data: "json, name=SortBy" })
  sortBy?: string;

  @Metadata({ data: "json, name=SortOrder" })
  sortOrder?: SortOrderEnum;

  @Metadata({ data: "json, name=ViewType" })
  viewType?: string;
}
