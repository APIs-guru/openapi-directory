import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VmwareSourceDetails
/** 
 * VmwareSourceDetails message describes a specific source details for the vmware source type.
**/
export class VmwareSourceDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=thumbprint" })
  thumbprint?: string;

  @Metadata({ data: "json, name=username" })
  username?: string;

  @Metadata({ data: "json, name=vcenterIp" })
  vcenterIp?: string;
}
