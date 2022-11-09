import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleSecuritySafebrowsingV4RiceDeltaEncoding
/** 
 * The Rice-Golomb encoded data. Used for sending compressed 4-byte hashes or compressed removal indices.
**/
export class GoogleSecuritySafebrowsingV4RiceDeltaEncoding extends SpeakeasyBase {
  @Metadata({ data: "json, name=encodedData" })
  encodedData?: string;

  @Metadata({ data: "json, name=firstValue" })
  firstValue?: string;

  @Metadata({ data: "json, name=numEntries" })
  numEntries?: number;

  @Metadata({ data: "json, name=riceParameter" })
  riceParameter?: number;
}
