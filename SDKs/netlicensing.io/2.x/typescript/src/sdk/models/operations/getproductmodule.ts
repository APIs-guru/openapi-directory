import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetProductModulePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=productModuleNumber" })
  productModuleNumber: string;
}


export class GetProductModuleSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class GetProductModuleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetProductModulePathParams;

  @Metadata()
  security: GetProductModuleSecurity;
}


export class GetProductModuleResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  netlicensing?: any;
}
