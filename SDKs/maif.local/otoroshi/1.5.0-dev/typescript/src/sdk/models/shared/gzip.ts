import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Gzip
/** 
 * Configuration for gzip of service responses
**/
export class Gzip extends SpeakeasyBase {
  @Metadata({ data: "json, name=blackList" })
  blackList: string[];

  @Metadata({ data: "json, name=bufferSize" })
  bufferSize: number;

  @Metadata({ data: "json, name=chunkedThreshold" })
  chunkedThreshold: number;

  @Metadata({ data: "json, name=compressionLevel" })
  compressionLevel: number;

  @Metadata({ data: "json, name=enabled" })
  enabled: boolean;

  @Metadata({ data: "json, name=excludedPatterns" })
  excludedPatterns: string[];

  @Metadata({ data: "json, name=whiteList" })
  whiteList: string[];
}
