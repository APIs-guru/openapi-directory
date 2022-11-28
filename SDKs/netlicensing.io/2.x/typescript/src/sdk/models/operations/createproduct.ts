import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CreateProductRequestBodyVatModeEnum {
    Gross = "GROSS",
    Net = "NET"
}


export class CreateProductRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=active;" })
  active: boolean;

  @SpeakeasyMetadata({ data: "form, name=description;" })
  description?: string;

  @SpeakeasyMetadata({ data: "form, name=licenseeAutoCreate;" })
  licenseeAutoCreate?: boolean;

  @SpeakeasyMetadata({ data: "form, name=licensingInfo;" })
  licensingInfo?: string;

  @SpeakeasyMetadata({ data: "form, name=name;" })
  name: string;

  @SpeakeasyMetadata({ data: "form, name=number;" })
  number?: string;

  @SpeakeasyMetadata({ data: "form, name=vatMode;" })
  vatMode?: CreateProductRequestBodyVatModeEnum;

  @SpeakeasyMetadata({ data: "form, name=version;" })
  version: string;
}


export class CreateProductSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class CreateProductRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateProductRequestBody;

  @SpeakeasyMetadata()
  security: CreateProductSecurity;
}


export class CreateProductResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  netlicensing?: any;
}
