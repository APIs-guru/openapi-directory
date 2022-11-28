import { SpeakeasyBase } from "../../../internal/utils";
import { Rule } from "./rule";
/**
 * Encapsulates the list of rules for asset selection and a default asset in case none of the rules match. Applicable to INSTREAM_VIDEO creatives.
**/
export declare class CreativeAssetSelection extends SpeakeasyBase {
    defaultAssetId?: string;
    rules?: Rule[];
}
