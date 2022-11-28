import { SpeakeasyBase } from "../../../internal/utils";
import { Container } from "./container";
import { Label } from "./label";
/**
 * Kubernetes Pod.
**/
export declare class Pod extends SpeakeasyBase {
    containers?: Container[];
    labels?: Label[];
    name?: string;
    ns?: string;
}
