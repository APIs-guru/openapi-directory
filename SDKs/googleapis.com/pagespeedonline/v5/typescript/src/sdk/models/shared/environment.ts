import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Environment
/** 
 * Message containing environment configuration for a Lighthouse run.
**/
export class Environment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=benchmarkIndex" })
  benchmarkIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=hostUserAgent" })
  hostUserAgent?: string;

  @SpeakeasyMetadata({ data: "json, name=networkUserAgent" })
  networkUserAgent?: string;
}
