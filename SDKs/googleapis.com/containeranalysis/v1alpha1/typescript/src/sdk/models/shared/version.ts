import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum VersionKindEnum {
    Normal = "NORMAL"
,    Minimum = "MINIMUM"
,    Maximum = "MAXIMUM"
}


// Version
/** 
 * Version contains structured information about the version of the package. For a discussion of this in Debian/Ubuntu: http://serverfault.com/questions/604541/debian-packages-version-convention For a discussion of this in Redhat/Fedora/Centos: http://blog.jasonantman.com/2014/07/how-yum-and-rpm-compare-versions/
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
