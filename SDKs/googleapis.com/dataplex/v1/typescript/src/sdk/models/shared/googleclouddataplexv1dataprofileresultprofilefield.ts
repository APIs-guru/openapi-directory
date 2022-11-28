import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfo } from "./googleclouddataplexv1dataprofileresultprofilefieldprofileinfo";



// GoogleCloudDataplexV1DataProfileResultProfileField
/** 
 * Represents a column field within a table schema.
**/
export class GoogleCloudDataplexV1DataProfileResultProfileField extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=profile" })
  profile?: GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfo;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
