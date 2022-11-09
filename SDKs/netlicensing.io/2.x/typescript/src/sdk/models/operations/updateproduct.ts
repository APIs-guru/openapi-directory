import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateProductPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=productNumber" })
  productNumber: string;
}

export enum UpdateProductRequestBodyVatModeEnum {
    Gross = "GROSS"
,    Net = "NET"
}


export class UpdateProductRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=active;" })
  active?: boolean;

  @Metadata({ data: "form, name=description;" })
  description?: string;

  @Metadata({ data: "form, name=licenseeAutoCreate;" })
  licenseeAutoCreate?: boolean;

  @Metadata({ data: "form, name=licensingInfo;" })
  licensingInfo?: string;

  @Metadata({ data: "form, name=name;" })
  name?: string;

  @Metadata({ data: "form, name=number;" })
  number?: string;

  @Metadata({ data: "form, name=vatMode;" })
  vatMode?: UpdateProductRequestBodyVatModeEnum;

  @Metadata({ data: "form, name=version;" })
  version?: string;
}


export class UpdateProductSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class UpdateProductRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateProductPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateProductRequestBody;

  @Metadata()
  security: UpdateProductSecurity;
}


export class UpdateProductResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  netlicensing?: any;
}
