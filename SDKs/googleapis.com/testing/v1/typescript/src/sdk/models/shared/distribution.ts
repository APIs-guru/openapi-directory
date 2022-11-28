import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Distribution
/** 
 * Data about the relative number of devices running a given configuration of the Android platform.
**/
export class Distribution extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=marketShare" })
  marketShare?: number;

  @SpeakeasyMetadata({ data: "json, name=measurementTime" })
  measurementTime?: string;
}
