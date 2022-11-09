import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Category } from "./category";
import { Identity } from "./identity";


// WindowsUpdate
/** 
 * Windows Update represents the metadata about the update for the Windows operating system. The fields in this message come from the Windows Update API documented at https://docs.microsoft.com/en-us/windows/win32/api/wuapi/nn-wuapi-iupdate.
**/
export class WindowsUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=categories", elemType: shared.Category })
  categories?: Category[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=identity" })
  identity?: Identity;

  @Metadata({ data: "json, name=kbArticleIds" })
  kbArticleIds?: string[];

  @Metadata({ data: "json, name=lastPublishedTimestamp" })
  lastPublishedTimestamp?: string;

  @Metadata({ data: "json, name=supportUrl" })
  supportUrl?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
