import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum VersionKindEnum {
    Normal = "NORMAL",
    Minimum = "MINIMUM",
    Maximum = "MAXIMUM"
}


// Version
/** 
 * Version contains structured information about the version of the package. For a discussion of this in Debian/Ubuntu: http://serverfault.com/questions/604541/debian-packages-version-convention For a discussion of this in Redhat/Fedora/Centos: http://blog.jasonantman.com/2014/07/how-yum-and-rpm-compare-versions/
**/
export class Version extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=epoch" })
  epoch?: number;

  @SpeakeasyMetadata({ data: "json, name=inclusive" })
  inclusive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: VersionKindEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=revision" })
  revision?: string;
}
