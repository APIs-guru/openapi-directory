import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudWebriskV1RiceDeltaEncoding
/** 
 * The Rice-Golomb encoded data. Used for sending compressed 4-byte hashes or compressed removal indices.
**/
export class GoogleCloudWebriskV1RiceDeltaEncoding extends SpeakeasyBase {
  @Metadata({ data: "json, name=encodedData" })
  encodedData?: string;

  @Metadata({ data: "json, name=entryCount" })
  entryCount?: number;

  @Metadata({ data: "json, name=firstValue" })
  firstValue?: string;

  @Metadata({ data: "json, name=riceParameter" })
  riceParameter?: number;
}
