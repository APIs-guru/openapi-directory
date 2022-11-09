import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateTransactionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=transactionNumber" })
  transactionNumber: string;
}

export enum UpdateTransactionRequestBodySourceEnum {
    Shop = "SHOP"
}

export enum UpdateTransactionRequestBodyStatusEnum {
    Cancelled = "CANCELLED"
,    Closed = "CLOSED"
,    Pending = "PENDING"
}


export class UpdateTransactionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=active;" })
  active?: boolean;

  @Metadata({ data: "form, name=dateClosed;" })
  dateClosed?: Date;

  @Metadata({ data: "form, name=dateCreated;" })
  dateCreated?: Date;

  @Metadata({ data: "form, name=number;" })
  number?: string;

  @Metadata({ data: "form, name=paymentMethod;" })
  paymentMethod?: string;

  @Metadata({ data: "form, name=source;" })
  source?: UpdateTransactionRequestBodySourceEnum;

  @Metadata({ data: "form, name=status;" })
  status?: UpdateTransactionRequestBodyStatusEnum;
}


export class UpdateTransactionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class UpdateTransactionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateTransactionPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateTransactionRequestBody;

  @Metadata()
  security: UpdateTransactionSecurity;
}


export class UpdateTransactionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  netlicensing?: any;
}
