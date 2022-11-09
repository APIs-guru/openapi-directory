import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// KafkaConfig
/** 
 * The configuration for kafka access
**/
export class KafkaConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=keyPass" })
  keyPass?: string;

  @Metadata({ data: "json, name=keyStore" })
  keyStore?: string;

  @Metadata({ data: "json, name=servers" })
  servers: string[];

  @Metadata({ data: "json, name=topic" })
  topic?: string;

  @Metadata({ data: "json, name=trustore" })
  trustore?: string;
}
