import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteProductModulePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=productModuleNumber" })
  productModuleNumber: string;
}


export class DeleteProductModuleQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=forceCascade" })
  forceCascade?: boolean;
}


export class DeleteProductModuleSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class DeleteProductModuleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteProductModulePathParams;

  @Metadata()
  queryParams: DeleteProductModuleQueryParams;

  @Metadata()
  security: DeleteProductModuleSecurity;
}


export class DeleteProductModuleResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  netlicensing?: any;
}
