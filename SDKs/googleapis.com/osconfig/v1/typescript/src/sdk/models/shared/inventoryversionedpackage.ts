import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InventoryVersionedPackage
/** 
 * Information related to the a standard versioned package. This includes package info for APT, Yum, Zypper, and Googet package managers.
**/
export class InventoryVersionedPackage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=architecture" })
  architecture?: string;

  @SpeakeasyMetadata({ data: "json, name=packageName" })
  packageName?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
