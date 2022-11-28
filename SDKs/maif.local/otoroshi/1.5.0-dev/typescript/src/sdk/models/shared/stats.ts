import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Stats
/** 
 * Live stats for a service or globally
**/
export class Stats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=calls" })
  calls: number;

  @SpeakeasyMetadata({ data: "json, name=concurrentHandledRequests" })
  concurrentHandledRequests: number;

  @SpeakeasyMetadata({ data: "json, name=dataIn" })
  dataIn: number;

  @SpeakeasyMetadata({ data: "json, name=dataInRate" })
  dataInRate: number;

  @SpeakeasyMetadata({ data: "json, name=dataOut" })
  dataOut: number;

  @SpeakeasyMetadata({ data: "json, name=dataOutRate" })
  dataOutRate: number;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration: number;

  @SpeakeasyMetadata({ data: "json, name=overhead" })
  overhead: number;

  @SpeakeasyMetadata({ data: "json, name=rate" })
  rate: number;
}
