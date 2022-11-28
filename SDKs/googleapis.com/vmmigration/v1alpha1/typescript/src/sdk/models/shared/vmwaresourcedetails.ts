import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VmwareSourceDetails
/** 
 * VmwareSourceDetails message describes a specific source details for the vmware source type.
**/
export class VmwareSourceDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=thumbprint" })
  thumbprint?: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;

  @SpeakeasyMetadata({ data: "json, name=vcenterIp" })
  vcenterIp?: string;
}
