import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PulsarDataExporterConfig
/** 
 * The configuration for kafka access
**/
export class PulsarDataExporterConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=namespace" })
  namespace: string;

  @Metadata({ data: "json, name=tenant" })
  tenant: string;

  @Metadata({ data: "json, name=topic" })
  topic: string;

  @Metadata({ data: "json, name=uri" })
  uri: string[];
}
