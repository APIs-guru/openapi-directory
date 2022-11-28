import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1DataQualityDimensionResult } from "./googleclouddataplexv1dataqualitydimensionresult";
import { GoogleCloudDataplexV1DataQualityRuleResult } from "./googleclouddataplexv1dataqualityruleresult";
import { GoogleCloudDataplexV1ScannedData } from "./googleclouddataplexv1scanneddata";



// GoogleCloudDataplexV1DataQualityResult
/** 
 * The output of a DataQualityScan.
**/
export class GoogleCloudDataplexV1DataQualityResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimensions", elemType: GoogleCloudDataplexV1DataQualityDimensionResult })
  dimensions?: GoogleCloudDataplexV1DataQualityDimensionResult[];

  @SpeakeasyMetadata({ data: "json, name=passed" })
  passed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=rowCount" })
  rowCount?: string;

  @SpeakeasyMetadata({ data: "json, name=rules", elemType: GoogleCloudDataplexV1DataQualityRuleResult })
  rules?: GoogleCloudDataplexV1DataQualityRuleResult[];

  @SpeakeasyMetadata({ data: "json, name=scannedData" })
  scannedData?: GoogleCloudDataplexV1ScannedData;
}
