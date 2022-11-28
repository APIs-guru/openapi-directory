import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudWebriskV1RiceDeltaEncoding
/** 
 * The Rice-Golomb encoded data. Used for sending compressed 4-byte hashes or compressed removal indices.
**/
export class GoogleCloudWebriskV1RiceDeltaEncoding extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=encodedData" })
  encodedData?: string;

  @SpeakeasyMetadata({ data: "json, name=entryCount" })
  entryCount?: number;

  @SpeakeasyMetadata({ data: "json, name=firstValue" })
  firstValue?: string;

  @SpeakeasyMetadata({ data: "json, name=riceParameter" })
  riceParameter?: number;
}
