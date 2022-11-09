import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Distribution
/** 
 * Data about the relative number of devices running a given configuration of the Android platform.
**/
export class Distribution extends SpeakeasyBase {
  @Metadata({ data: "json, name=marketShare" })
  marketShare?: number;

  @Metadata({ data: "json, name=measurementTime" })
  measurementTime?: string;
}
