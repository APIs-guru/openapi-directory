import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// KafkaConfig
/** 
 * The configuration for kafka access
**/
export class KafkaConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=keyPass" })
  keyPass?: string;

  @SpeakeasyMetadata({ data: "json, name=keyStore" })
  keyStore?: string;

  @SpeakeasyMetadata({ data: "json, name=servers" })
  servers: string[];

  @SpeakeasyMetadata({ data: "json, name=topic" })
  topic?: string;

  @SpeakeasyMetadata({ data: "json, name=trustore" })
  trustore?: string;
}
