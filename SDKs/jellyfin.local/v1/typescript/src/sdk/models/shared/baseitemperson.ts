import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BaseItemPersonImageBlurHashes
/** 
 * Gets or sets the primary image blurhash.
**/
export class BaseItemPersonImageBlurHashes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Art" })
  art?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Backdrop" })
  backdrop?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Banner" })
  banner?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Box" })
  box?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=BoxRear" })
  boxRear?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Chapter" })
  chapter?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Disc" })
  disc?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Logo" })
  logo?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Menu" })
  menu?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Primary" })
  primary?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Profile" })
  profile?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Screenshot" })
  screenshot?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Thumb" })
  thumb?: Map<string, string>;
}


// BaseItemPerson
/** 
 * This is used by the api to get information about a Person within a BaseItem.
**/
export class BaseItemPerson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=ImageBlurHashes" })
  imageBlurHashes?: BaseItemPersonImageBlurHashes;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=PrimaryImageTag" })
  primaryImageTag?: string;

  @SpeakeasyMetadata({ data: "json, name=Role" })
  role?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;
}
