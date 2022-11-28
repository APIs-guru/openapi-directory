import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PulsarDataExporterConfig
/** 
 * The configuration for kafka access
**/
export class PulsarDataExporterConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=namespace" })
  namespace: string;

  @SpeakeasyMetadata({ data: "json, name=tenant" })
  tenant: string;

  @SpeakeasyMetadata({ data: "json, name=topic" })
  topic: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string[];
}
