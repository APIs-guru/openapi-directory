import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";



// ImageVersion
/** 
 * ImageVersion information
**/
export class ImageVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationDisabled" })
  creationDisabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=imageVersionId" })
  imageVersionId?: string;

  @SpeakeasyMetadata({ data: "json, name=isDefault" })
  isDefault?: boolean;

  @SpeakeasyMetadata({ data: "json, name=releaseDate" })
  releaseDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=supportedPythonVersions" })
  supportedPythonVersions?: string[];

  @SpeakeasyMetadata({ data: "json, name=upgradeDisabled" })
  upgradeDisabled?: boolean;
}
