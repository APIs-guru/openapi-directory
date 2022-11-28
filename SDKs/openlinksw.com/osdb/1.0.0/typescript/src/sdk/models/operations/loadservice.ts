import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class LoadServiceRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=service_description_url" })
  serviceDescriptionUrl: string;

  @SpeakeasyMetadata({ data: "json, name=service_moniker" })
  serviceMoniker?: string;
}

export enum LoadService200ApplicationJsonStatusEnum {
    Success = "success"
}


export class LoadService200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=api" })
  api: string;

  @SpeakeasyMetadata({ data: "json, name=method" })
  method: string;

  @SpeakeasyMetadata({ data: "json, name=response" })
  response: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: LoadService200ApplicationJsonStatusEnum;
}


export class LoadServiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: LoadServiceRequestBody;
}


export class LoadServiceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  loadService200ApplicationJsonObject?: LoadService200ApplicationJson;
}
