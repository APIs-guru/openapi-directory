import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRunV2BinaryAuthorization
/** 
 * Settings for Binary Authorization feature.
**/
export class GoogleCloudRunV2BinaryAuthorization extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=breakglassJustification" })
  breakglassJustification?: string;

  @SpeakeasyMetadata({ data: "json, name=useDefault" })
  useDefault?: boolean;
}
