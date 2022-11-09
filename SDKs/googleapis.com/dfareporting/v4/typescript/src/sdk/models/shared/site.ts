import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DimensionValue } from "./dimensionvalue";
import { DimensionValue } from "./dimensionvalue";
import { SiteContact } from "./sitecontact";
import { SiteSettings } from "./sitesettings";
import { SiteVideoSettings } from "./sitevideosettings";


// Site
/** 
 * Contains properties of a site.
**/
export class Site extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=approved" })
  approved?: boolean;

  @Metadata({ data: "json, name=directorySiteId" })
  directorySiteId?: string;

  @Metadata({ data: "json, name=directorySiteIdDimensionValue" })
  directorySiteIdDimensionValue?: DimensionValue;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=idDimensionValue" })
  idDimensionValue?: DimensionValue;

  @Metadata({ data: "json, name=keyName" })
  keyName?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=siteContacts", elemType: shared.SiteContact })
  siteContacts?: SiteContact[];

  @Metadata({ data: "json, name=siteSettings" })
  siteSettings?: SiteSettings;

  @Metadata({ data: "json, name=subaccountId" })
  subaccountId?: string;

  @Metadata({ data: "json, name=videoSettings" })
  videoSettings?: SiteVideoSettings;
}
