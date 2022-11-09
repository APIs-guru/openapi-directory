import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class LoadServiceRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=service_description_url" })
  serviceDescriptionUrl: string;

  @Metadata({ data: "json, name=service_moniker" })
  serviceMoniker?: string;
}


export class LoadServiceRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: LoadServiceRequestBody;
}

export enum LoadService200ApplicationJsonStatusEnum {
    Success = "success"
}


export class LoadService200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=api" })
  api: string;

  @Metadata({ data: "json, name=method" })
  method: string;

  @Metadata({ data: "json, name=response" })
  response: string;

  @Metadata({ data: "json, name=status" })
  status: LoadService200ApplicationJsonStatusEnum;
}


export class LoadServiceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  statusCode: number;

  @Metadata()
  loadService200ApplicationJsonObject?: LoadService200ApplicationJson;
}
