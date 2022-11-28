import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateProductPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=productNumber" })
  productNumber: string;
}

export enum UpdateProductRequestBodyVatModeEnum {
    Gross = "GROSS",
    Net = "NET"
}


export class UpdateProductRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=active;" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "form, name=description;" })
  description?: string;

  @SpeakeasyMetadata({ data: "form, name=licenseeAutoCreate;" })
  licenseeAutoCreate?: boolean;

  @SpeakeasyMetadata({ data: "form, name=licensingInfo;" })
  licensingInfo?: string;

  @SpeakeasyMetadata({ data: "form, name=name;" })
  name?: string;

  @SpeakeasyMetadata({ data: "form, name=number;" })
  number?: string;

  @SpeakeasyMetadata({ data: "form, name=vatMode;" })
  vatMode?: UpdateProductRequestBodyVatModeEnum;

  @SpeakeasyMetadata({ data: "form, name=version;" })
  version?: string;
}


export class UpdateProductSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class UpdateProductRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateProductPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateProductRequestBody;

  @SpeakeasyMetadata()
  security: UpdateProductSecurity;
}


export class UpdateProductResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  netlicensing?: any;
}
