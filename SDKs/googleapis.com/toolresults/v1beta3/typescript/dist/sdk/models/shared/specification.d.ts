import { SpeakeasyBase } from "../../../internal/utils";
import { AndroidTest } from "./androidtest";
import { IosTest } from "./iostest";
/**
 * The details about how to run the execution.
**/
export declare class Specification extends SpeakeasyBase {
    androidTest?: AndroidTest;
    iosTest?: IosTest;
}
