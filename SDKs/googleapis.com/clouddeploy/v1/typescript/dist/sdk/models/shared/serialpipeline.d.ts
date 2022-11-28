import { SpeakeasyBase } from "../../../internal/utils";
import { Stage } from "./stage";
/**
 * SerialPipeline defines a sequential set of stages for a `DeliveryPipeline`.
**/
export declare class SerialPipeline extends SpeakeasyBase {
    stages?: Stage[];
}
