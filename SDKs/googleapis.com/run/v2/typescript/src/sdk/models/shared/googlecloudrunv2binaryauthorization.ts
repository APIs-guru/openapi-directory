import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRunV2BinaryAuthorization
/** 
 * Settings for Binary Authorization feature.
**/
export class GoogleCloudRunV2BinaryAuthorization extends SpeakeasyBase {
  @Metadata({ data: "json, name=breakglassJustification" })
  breakglassJustification?: string;

  @Metadata({ data: "json, name=useDefault" })
  useDefault?: boolean;
}
