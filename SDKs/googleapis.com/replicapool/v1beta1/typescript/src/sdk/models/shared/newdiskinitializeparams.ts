import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NewDiskInitializeParams
/** 
 * Initialization parameters for creating a new disk.
**/
export class NewDiskInitializeParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=diskSizeGb" })
  diskSizeGb?: string;

  @SpeakeasyMetadata({ data: "json, name=diskType" })
  diskType?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceImage" })
  sourceImage?: string;
}
