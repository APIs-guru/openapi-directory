import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum TagKeyPurposeEnum {
    PurposeUnspecified = "PURPOSE_UNSPECIFIED"
,    GceFirewall = "GCE_FIREWALL"
}


// TagKey
/** 
 * A TagKey, used to group a set of TagValues.
**/
export class TagKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=namespacedName" })
  namespacedName?: string;

  @Metadata({ data: "json, name=parent" })
  parent?: string;

  @Metadata({ data: "json, name=purpose" })
  purpose?: TagKeyPurposeEnum;

  @Metadata({ data: "json, name=purposeData" })
  purposeData?: Map<string, string>;

  @Metadata({ data: "json, name=shortName" })
  shortName?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
