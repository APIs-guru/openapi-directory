import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ExternalRefCategoryEnum {
    CategoryUnspecified = "CATEGORY_UNSPECIFIED"
,    Security = "SECURITY"
,    PackageManager = "PACKAGE_MANAGER"
,    PersistentId = "PERSISTENT_ID"
,    Other = "OTHER"
}


// ExternalRef
/** 
 * An External Reference allows a Package to reference an external source of additional information, metadata, enumerations, asset identifiers, or downloadable content believed to be relevant to the Package
**/
export class ExternalRef extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category?: ExternalRefCategoryEnum;

  @Metadata({ data: "json, name=comment" })
  comment?: string;

  @Metadata({ data: "json, name=locator" })
  locator?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
