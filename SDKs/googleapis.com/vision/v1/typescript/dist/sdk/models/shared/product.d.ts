import { SpeakeasyBase } from "../../../internal/utils";
import { KeyValue } from "./keyvalue";
/**
 * A Product contains ReferenceImages.
**/
export declare class Product extends SpeakeasyBase {
    description?: string;
    displayName?: string;
    name?: string;
    productCategory?: string;
    productLabels?: KeyValue[];
}
