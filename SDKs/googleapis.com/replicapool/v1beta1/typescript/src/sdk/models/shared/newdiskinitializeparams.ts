import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NewDiskInitializeParams
/** 
 * Initialization parameters for creating a new disk.
**/
export class NewDiskInitializeParams extends SpeakeasyBase {
  @Metadata({ data: "json, name=diskSizeGb" })
  diskSizeGb?: string;

  @Metadata({ data: "json, name=diskType" })
  diskType?: string;

  @Metadata({ data: "json, name=sourceImage" })
  sourceImage?: string;
}
