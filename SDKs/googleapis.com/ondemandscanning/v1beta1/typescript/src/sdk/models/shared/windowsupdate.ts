import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Category } from "./category";
import { Identity } from "./identity";



// WindowsUpdate
/** 
 * Windows Update represents the metadata about the update for the Windows operating system. The fields in this message come from the Windows Update API documented at https://docs.microsoft.com/en-us/windows/win32/api/wuapi/nn-wuapi-iupdate.
**/
export class WindowsUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categories", elemType: Category })
  categories?: Category[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=identity" })
  identity?: Identity;

  @SpeakeasyMetadata({ data: "json, name=kbArticleIds" })
  kbArticleIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=lastPublishedTimestamp" })
  lastPublishedTimestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=supportUrl" })
  supportUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
