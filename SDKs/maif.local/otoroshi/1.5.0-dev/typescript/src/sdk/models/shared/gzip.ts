import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Gzip
/** 
 * Configuration for gzip of service responses
**/
export class Gzip extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blackList" })
  blackList: string[];

  @SpeakeasyMetadata({ data: "json, name=bufferSize" })
  bufferSize: number;

  @SpeakeasyMetadata({ data: "json, name=chunkedThreshold" })
  chunkedThreshold: number;

  @SpeakeasyMetadata({ data: "json, name=compressionLevel" })
  compressionLevel: number;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=excludedPatterns" })
  excludedPatterns: string[];

  @SpeakeasyMetadata({ data: "json, name=whiteList" })
  whiteList: string[];
}
