import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BaseItemPersonImageBlurHashes
/** 
 * Gets or sets the primary image blurhash.
**/
export class BaseItemPersonImageBlurHashes extends SpeakeasyBase {
  @Metadata({ data: "json, name=Art" })
  art?: Map<string, string>;

  @Metadata({ data: "json, name=Backdrop" })
  backdrop?: Map<string, string>;

  @Metadata({ data: "json, name=Banner" })
  banner?: Map<string, string>;

  @Metadata({ data: "json, name=Box" })
  box?: Map<string, string>;

  @Metadata({ data: "json, name=BoxRear" })
  boxRear?: Map<string, string>;

  @Metadata({ data: "json, name=Chapter" })
  chapter?: Map<string, string>;

  @Metadata({ data: "json, name=Disc" })
  disc?: Map<string, string>;

  @Metadata({ data: "json, name=Logo" })
  logo?: Map<string, string>;

  @Metadata({ data: "json, name=Menu" })
  menu?: Map<string, string>;

  @Metadata({ data: "json, name=Primary" })
  primary?: Map<string, string>;

  @Metadata({ data: "json, name=Profile" })
  profile?: Map<string, string>;

  @Metadata({ data: "json, name=Screenshot" })
  screenshot?: Map<string, string>;

  @Metadata({ data: "json, name=Thumb" })
  thumb?: Map<string, string>;
}


// BaseItemPerson
/** 
 * This is used by the api to get information about a Person within a BaseItem.
**/
export class BaseItemPerson extends SpeakeasyBase {
  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=ImageBlurHashes" })
  imageBlurHashes?: BaseItemPersonImageBlurHashes;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=PrimaryImageTag" })
  primaryImageTag?: string;

  @Metadata({ data: "json, name=Role" })
  role?: string;

  @Metadata({ data: "json, name=Type" })
  type?: string;
}
