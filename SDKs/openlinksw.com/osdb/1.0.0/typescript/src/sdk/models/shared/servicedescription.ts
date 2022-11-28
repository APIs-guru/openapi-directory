import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ServiceDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=import_source_uri" })
  importSourceUri: string;

  @SpeakeasyMetadata({ data: "json, name=service_id" })
  serviceId: string;

  @SpeakeasyMetadata({ data: "json, name=service_name" })
  serviceName: string;
}
