import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UnloadServicePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serviceId" })
  serviceId: string;
}


export class UnloadServiceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UnloadServicePathParams;
}

export enum UnloadService200ApplicationJsonStatusEnum {
    Success = "success"
}


export class UnloadService200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=api" })
  api: string;

  @Metadata({ data: "json, name=method" })
  method: string;

  @Metadata({ data: "json, name=response" })
  response: string;

  @Metadata({ data: "json, name=status" })
  status: UnloadService200ApplicationJsonStatusEnum;
}


export class UnloadServiceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  statusCode: number;

  @Metadata()
  unloadService200ApplicationJsonObject?: UnloadService200ApplicationJson;
}
