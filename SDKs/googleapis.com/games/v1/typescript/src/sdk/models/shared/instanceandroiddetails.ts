import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InstanceAndroidDetails
/** 
 * The Android instance details resource.
**/
export class InstanceAndroidDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enablePiracyCheck" })
  enablePiracyCheck?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=packageName" })
  packageName?: string;

  @SpeakeasyMetadata({ data: "json, name=preferred" })
  preferred?: boolean;
}
