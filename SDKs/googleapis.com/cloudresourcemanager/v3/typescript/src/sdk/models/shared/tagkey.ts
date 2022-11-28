import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum TagKeyPurposeEnum {
    PurposeUnspecified = "PURPOSE_UNSPECIFIED",
    GceFirewall = "GCE_FIREWALL"
}


// TagKeyInput
/** 
 * A TagKey, used to group a set of TagValues.
**/
export class TagKeyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: string;

  @SpeakeasyMetadata({ data: "json, name=purpose" })
  purpose?: TagKeyPurposeEnum;

  @SpeakeasyMetadata({ data: "json, name=purposeData" })
  purposeData?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=shortName" })
  shortName?: string;
}


// TagKey
/** 
 * A TagKey, used to group a set of TagValues.
**/
export class TagKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=namespacedName" })
  namespacedName?: string;

  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: string;

  @SpeakeasyMetadata({ data: "json, name=purpose" })
  purpose?: TagKeyPurposeEnum;

  @SpeakeasyMetadata({ data: "json, name=purposeData" })
  purposeData?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=shortName" })
  shortName?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
