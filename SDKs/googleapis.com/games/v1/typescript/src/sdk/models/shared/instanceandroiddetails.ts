import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InstanceAndroidDetails
/** 
 * The Android instance details resource.
**/
export class InstanceAndroidDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=enablePiracyCheck" })
  enablePiracyCheck?: boolean;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=packageName" })
  packageName?: string;

  @Metadata({ data: "json, name=preferred" })
  preferred?: boolean;
}
