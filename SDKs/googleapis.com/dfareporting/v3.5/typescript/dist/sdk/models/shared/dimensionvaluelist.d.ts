import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionValue } from "./dimensionvalue";
/**
 * Represents the list of DimensionValue resources.
**/
export declare class DimensionValueList extends SpeakeasyBase {
    etag?: string;
    items?: DimensionValue[];
    kind?: string;
    nextPageToken?: string;
}
