import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoDoubleFieldInfo } from "./googleclouddataplexv1dataprofileresultprofilefieldprofileinfodoublefieldinfo";
import { GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoIntegerFieldInfo } from "./googleclouddataplexv1dataprofileresultprofilefieldprofileinfointegerfieldinfo";
import { GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoStringFieldInfo } from "./googleclouddataplexv1dataprofileresultprofilefieldprofileinfostringfieldinfo";
import { GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue } from "./googleclouddataplexv1dataprofileresultprofilefieldprofileinfotopnvalue";



// GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfo
/** 
 * ProfileInfo defines the profile information for each schema field type.
**/
export class GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=distinctRatio" })
  distinctRatio?: number;

  @SpeakeasyMetadata({ data: "json, name=doubleProfile" })
  doubleProfile?: GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoDoubleFieldInfo;

  @SpeakeasyMetadata({ data: "json, name=integerProfile" })
  integerProfile?: GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoIntegerFieldInfo;

  @SpeakeasyMetadata({ data: "json, name=nullRatio" })
  nullRatio?: number;

  @SpeakeasyMetadata({ data: "json, name=stringProfile" })
  stringProfile?: GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoStringFieldInfo;

  @SpeakeasyMetadata({ data: "json, name=topNValues", elemType: GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue })
  topNValues?: GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue[];
}
