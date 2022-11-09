import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AndroidTest } from "./androidtest";
import { IosTest } from "./iostest";


// Specification
/** 
 * The details about how to run the execution.
**/
export class Specification extends SpeakeasyBase {
  @Metadata({ data: "json, name=androidTest" })
  androidTest?: AndroidTest;

  @Metadata({ data: "json, name=iosTest" })
  iosTest?: IosTest;
}
