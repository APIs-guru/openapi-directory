import { SpeakeasyBase } from "../../../internal/utils";
import { Label } from "./label";
/**
 * Container associated with the finding.
**/
export declare class Container extends SpeakeasyBase {
    imageId?: string;
    labels?: Label[];
    name?: string;
    uri?: string;
}
