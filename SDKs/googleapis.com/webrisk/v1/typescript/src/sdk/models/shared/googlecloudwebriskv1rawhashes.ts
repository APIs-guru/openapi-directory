import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudWebriskV1RawHashes
/** 
 * The uncompressed threat entries in hash format. Hashes can be anywhere from 4 to 32 bytes in size. A large majority are 4 bytes, but some hashes are lengthened if they collide with the hash of a popular URI. Used for sending ThreatEntryAdditons to clients that do not support compression, or when sending non-4-byte hashes to clients that do support compression.
**/
export class GoogleCloudWebriskV1RawHashes extends SpeakeasyBase {
  @Metadata({ data: "json, name=prefixSize" })
  prefixSize?: number;

  @Metadata({ data: "json, name=rawHashes" })
  rawHashes?: string;
}
