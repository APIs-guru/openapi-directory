import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum VersionKindEnum {
    VersionKindUnspecified = "VERSION_KIND_UNSPECIFIED"
,    Normal = "NORMAL"
,    Minimum = "MINIMUM"
,    Maximum = "MAXIMUM"
}


// Version
/** 
 * Version contains structured information about the version of a package.
**/
export class Version extends SpeakeasyBase {
  @Metadata({ data: "json, name=epoch" })
  epoch?: number;

  @Metadata({ data: "json, name=inclusive" })
  inclusive?: boolean;

  @Metadata({ data: "json, name=kind" })
  kind?: VersionKindEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=revision" })
  revision?: string;
}
