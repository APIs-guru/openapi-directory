import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ServiceDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=import_source_uri" })
  importSourceUri: string;

  @Metadata({ data: "json, name=service_id" })
  serviceId: string;

  @Metadata({ data: "json, name=service_name" })
  serviceName: string;
}
