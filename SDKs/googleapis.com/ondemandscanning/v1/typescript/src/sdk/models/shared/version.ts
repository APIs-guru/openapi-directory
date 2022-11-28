import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum VersionKindEnum {
    VersionKindUnspecified = "VERSION_KIND_UNSPECIFIED",
    Normal = "NORMAL",
    Minimum = "MINIMUM",
    Maximum = "MAXIMUM"
}


// Version
/** 
 * Version contains structured information about the version of a package.
**/
export class Version extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=epoch" })
  epoch?: number;

  @SpeakeasyMetadata({ data: "json, name=fullName" })
  fullName?: string;

  @SpeakeasyMetadata({ data: "json, name=inclusive" })
  inclusive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: VersionKindEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=revision" })
  revision?: string;
}
