import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1DataQualityDimensionResult } from "./googleclouddataplexv1dataqualitydimensionresult";
import { GoogleCloudDataplexV1DataQualityRuleResult } from "./googleclouddataplexv1dataqualityruleresult";
import { GoogleCloudDataplexV1ScannedData } from "./googleclouddataplexv1scanneddata";
/**
 * The output of a DataQualityScan.
**/
export declare class GoogleCloudDataplexV1DataQualityResult extends SpeakeasyBase {
    dimensions?: GoogleCloudDataplexV1DataQualityDimensionResult[];
    passed?: boolean;
    rowCount?: string;
    rules?: GoogleCloudDataplexV1DataQualityRuleResult[];
    scannedData?: GoogleCloudDataplexV1ScannedData;
}
