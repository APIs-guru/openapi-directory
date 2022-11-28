import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1DataProfileResultProfileField } from "./googleclouddataplexv1dataprofileresultprofilefield";



// GoogleCloudDataplexV1DataProfileResultProfile
/** 
 * Profile information describing the structure and layout of the data and contains the profile info.
**/
export class GoogleCloudDataplexV1DataProfileResultProfile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fields", elemType: GoogleCloudDataplexV1DataProfileResultProfileField })
  fields?: GoogleCloudDataplexV1DataProfileResultProfileField[];
}
