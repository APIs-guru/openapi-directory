import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CreateTransactionRequestBodySourceEnum {
    Shop = "SHOP"
}

export enum CreateTransactionRequestBodyStatusEnum {
    Cancelled = "CANCELLED",
    Closed = "CLOSED",
    Pending = "PENDING"
}


export class CreateTransactionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=active;" })
  active: boolean;

  @SpeakeasyMetadata({ data: "form, name=dateClosed;" })
  dateClosed?: Date;

  @SpeakeasyMetadata({ data: "form, name=dateCreated;" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "form, name=licenseeNumber;" })
  licenseeNumber?: string;

  @SpeakeasyMetadata({ data: "form, name=number;" })
  number?: string;

  @SpeakeasyMetadata({ data: "form, name=paymentMethod;" })
  paymentMethod?: string;

  @SpeakeasyMetadata({ data: "form, name=source;" })
  source: CreateTransactionRequestBodySourceEnum;

  @SpeakeasyMetadata({ data: "form, name=status;" })
  status: CreateTransactionRequestBodyStatusEnum;
}


export class CreateTransactionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class CreateTransactionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateTransactionRequestBody;

  @SpeakeasyMetadata()
  security: CreateTransactionSecurity;
}


export class CreateTransactionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  netlicensing?: any;
}
