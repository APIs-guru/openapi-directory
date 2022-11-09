import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WindowsUpdateCategory } from "./windowsupdatecategory";


// WindowsUpdatePackage
/** 
 * Details related to a Windows Update package. Field data and names are taken from Windows Update API IUpdate Interface: https://docs.microsoft.com/en-us/windows/win32/api/_wua/ Descriptive fields like title, and description are localized based on the locale of the VM being updated.
**/
export class WindowsUpdatePackage extends SpeakeasyBase {
  @Metadata({ data: "json, name=categories", elemType: shared.WindowsUpdateCategory })
  categories?: WindowsUpdateCategory[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=kbArticleIds" })
  kbArticleIds?: string[];

  @Metadata({ data: "json, name=lastDeploymentChangeTime" })
  lastDeploymentChangeTime?: string;

  @Metadata({ data: "json, name=moreInfoUrls" })
  moreInfoUrls?: string[];

  @Metadata({ data: "json, name=revisionNumber" })
  revisionNumber?: number;

  @Metadata({ data: "json, name=supportUrl" })
  supportUrl?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=updateId" })
  updateId?: string;
}
