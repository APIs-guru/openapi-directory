import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateProductRequestBodyVatModeEnum {
    Gross = "GROSS"
,    Net = "NET"
}


export class CreateProductRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=active;" })
  active: boolean;

  @Metadata({ data: "form, name=description;" })
  description?: string;

  @Metadata({ data: "form, name=licenseeAutoCreate;" })
  licenseeAutoCreate?: boolean;

  @Metadata({ data: "form, name=licensingInfo;" })
  licensingInfo?: string;

  @Metadata({ data: "form, name=name;" })
  name: string;

  @Metadata({ data: "form, name=number;" })
  number?: string;

  @Metadata({ data: "form, name=vatMode;" })
  vatMode?: CreateProductRequestBodyVatModeEnum;

  @Metadata({ data: "form, name=version;" })
  version: string;
}


export class CreateProductSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class CreateProductRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateProductRequestBody;

  @Metadata()
  security: CreateProductSecurity;
}


export class CreateProductResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  netlicensing?: any;
}
