import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Environment
/** 
 * Message containing environment configuration for a Lighthouse run.
**/
export class Environment extends SpeakeasyBase {
  @Metadata({ data: "json, name=benchmarkIndex" })
  benchmarkIndex?: number;

  @Metadata({ data: "json, name=hostUserAgent" })
  hostUserAgent?: string;

  @Metadata({ data: "json, name=networkUserAgent" })
  networkUserAgent?: string;
}
