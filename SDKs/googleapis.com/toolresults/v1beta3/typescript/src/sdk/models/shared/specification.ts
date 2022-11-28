import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AndroidTest } from "./androidtest";
import { IosTest } from "./iostest";



// Specification
/** 
 * The details about how to run the execution.
**/
export class Specification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=androidTest" })
  androidTest?: AndroidTest;

  @SpeakeasyMetadata({ data: "json, name=iosTest" })
  iosTest?: IosTest;
}
