import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoDoubleFieldInfo } from "./googleclouddataplexv1dataprofileresultprofilefieldprofileinfodoublefieldinfo";
import { GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoIntegerFieldInfo } from "./googleclouddataplexv1dataprofileresultprofilefieldprofileinfointegerfieldinfo";
import { GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoStringFieldInfo } from "./googleclouddataplexv1dataprofileresultprofilefieldprofileinfostringfieldinfo";
import { GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue } from "./googleclouddataplexv1dataprofileresultprofilefieldprofileinfotopnvalue";
/**
 * ProfileInfo defines the profile information for each schema field type.
**/
export declare class GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfo extends SpeakeasyBase {
    distinctRatio?: number;
    doubleProfile?: GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoDoubleFieldInfo;
    integerProfile?: GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoIntegerFieldInfo;
    nullRatio?: number;
    stringProfile?: GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoStringFieldInfo;
    topNValues?: GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue[];
}
