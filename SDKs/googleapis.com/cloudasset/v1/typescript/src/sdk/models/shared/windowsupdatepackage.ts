import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WindowsUpdateCategory } from "./windowsupdatecategory";



// WindowsUpdatePackage
/** 
 * Details related to a Windows Update package. Field data and names are taken from Windows Update API IUpdate Interface: https://docs.microsoft.com/en-us/windows/win32/api/_wua/ Descriptive fields like title, and description are localized based on the locale of the VM being updated.
**/
export class WindowsUpdatePackage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categories", elemType: WindowsUpdateCategory })
  categories?: WindowsUpdateCategory[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=kbArticleIds" })
  kbArticleIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=lastDeploymentChangeTime" })
  lastDeploymentChangeTime?: string;

  @SpeakeasyMetadata({ data: "json, name=moreInfoUrls" })
  moreInfoUrls?: string[];

  @SpeakeasyMetadata({ data: "json, name=revisionNumber" })
  revisionNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=supportUrl" })
  supportUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=updateId" })
  updateId?: string;
}
