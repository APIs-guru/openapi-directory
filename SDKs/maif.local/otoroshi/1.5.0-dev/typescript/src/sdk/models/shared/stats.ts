import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Stats
/** 
 * Live stats for a service or globally
**/
export class Stats extends SpeakeasyBase {
  @Metadata({ data: "json, name=calls" })
  calls: number;

  @Metadata({ data: "json, name=concurrentHandledRequests" })
  concurrentHandledRequests: number;

  @Metadata({ data: "json, name=dataIn" })
  dataIn: number;

  @Metadata({ data: "json, name=dataInRate" })
  dataInRate: number;

  @Metadata({ data: "json, name=dataOut" })
  dataOut: number;

  @Metadata({ data: "json, name=dataOutRate" })
  dataOutRate: number;

  @Metadata({ data: "json, name=duration" })
  duration: number;

  @Metadata({ data: "json, name=overhead" })
  overhead: number;

  @Metadata({ data: "json, name=rate" })
  rate: number;
}
