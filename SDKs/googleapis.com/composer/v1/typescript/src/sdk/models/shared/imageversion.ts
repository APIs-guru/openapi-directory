import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Date } from "./date";


// ImageVersion
/** 
 * ImageVersion information
**/
export class ImageVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationDisabled" })
  creationDisabled?: boolean;

  @Metadata({ data: "json, name=imageVersionId" })
  imageVersionId?: string;

  @Metadata({ data: "json, name=isDefault" })
  isDefault?: boolean;

  @Metadata({ data: "json, name=releaseDate" })
  releaseDate?: Date;

  @Metadata({ data: "json, name=supportedPythonVersions" })
  supportedPythonVersions?: string[];

  @Metadata({ data: "json, name=upgradeDisabled" })
  upgradeDisabled?: boolean;
}
