import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UnloadServicePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serviceId" })
  serviceId: string;
}

export enum UnloadService200ApplicationJsonStatusEnum {
    Success = "success"
}


export class UnloadService200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=api" })
  api: string;

  @SpeakeasyMetadata({ data: "json, name=method" })
  method: string;

  @SpeakeasyMetadata({ data: "json, name=response" })
  response: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: UnloadService200ApplicationJsonStatusEnum;
}


export class UnloadServiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UnloadServicePathParams;
}


export class UnloadServiceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  unloadService200ApplicationJsonObject?: UnloadService200ApplicationJson;
}
