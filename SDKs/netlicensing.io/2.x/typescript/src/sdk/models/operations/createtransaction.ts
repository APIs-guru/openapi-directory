import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateTransactionRequestBodySourceEnum {
    Shop = "SHOP"
}

export enum CreateTransactionRequestBodyStatusEnum {
    Cancelled = "CANCELLED"
,    Closed = "CLOSED"
,    Pending = "PENDING"
}


export class CreateTransactionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=active;" })
  active: boolean;

  @Metadata({ data: "form, name=dateClosed;" })
  dateClosed?: Date;

  @Metadata({ data: "form, name=dateCreated;" })
  dateCreated?: Date;

  @Metadata({ data: "form, name=licenseeNumber;" })
  licenseeNumber?: string;

  @Metadata({ data: "form, name=number;" })
  number?: string;

  @Metadata({ data: "form, name=paymentMethod;" })
  paymentMethod?: string;

  @Metadata({ data: "form, name=source;" })
  source: CreateTransactionRequestBodySourceEnum;

  @Metadata({ data: "form, name=status;" })
  status: CreateTransactionRequestBodyStatusEnum;
}


export class CreateTransactionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class CreateTransactionRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateTransactionRequestBody;

  @Metadata()
  security: CreateTransactionSecurity;
}


export class CreateTransactionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  netlicensing?: any;
}
