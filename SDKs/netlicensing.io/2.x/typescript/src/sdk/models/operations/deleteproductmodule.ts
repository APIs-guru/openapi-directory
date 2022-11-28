import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteProductModulePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=productModuleNumber" })
  productModuleNumber: string;
}


export class DeleteProductModuleQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=forceCascade" })
  forceCascade?: boolean;
}


export class DeleteProductModuleSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class DeleteProductModuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteProductModulePathParams;

  @SpeakeasyMetadata()
  queryParams: DeleteProductModuleQueryParams;

  @SpeakeasyMetadata()
  security: DeleteProductModuleSecurity;
}


export class DeleteProductModuleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  netlicensing?: any;
}
