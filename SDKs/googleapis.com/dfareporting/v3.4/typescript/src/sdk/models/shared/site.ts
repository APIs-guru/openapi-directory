import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DimensionValue } from "./dimensionvalue";
import { SiteContact } from "./sitecontact";
import { SiteSettings } from "./sitesettings";
import { SiteVideoSettings } from "./sitevideosettings";



// Site
/** 
 * Contains properties of a site.
**/
export class Site extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=approved" })
  approved?: boolean;

  @SpeakeasyMetadata({ data: "json, name=directorySiteId" })
  directorySiteId?: string;

  @SpeakeasyMetadata({ data: "json, name=directorySiteIdDimensionValue" })
  directorySiteIdDimensionValue?: DimensionValue;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=idDimensionValue" })
  idDimensionValue?: DimensionValue;

  @SpeakeasyMetadata({ data: "json, name=keyName" })
  keyName?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=siteContacts", elemType: SiteContact })
  siteContacts?: SiteContact[];

  @SpeakeasyMetadata({ data: "json, name=siteSettings" })
  siteSettings?: SiteSettings;

  @SpeakeasyMetadata({ data: "json, name=subaccountId" })
  subaccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=videoSettings" })
  videoSettings?: SiteVideoSettings;
}
