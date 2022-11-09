import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VersionedPackage
/** 
 * Information related to the a standard versioned package. This includes package info for APT, Yum, Zypper, and Googet package managers.
**/
export class VersionedPackage extends SpeakeasyBase {
  @Metadata({ data: "json, name=architecture" })
  architecture?: string;

  @Metadata({ data: "json, name=packageName" })
  packageName?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
