import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateTransactionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=transactionNumber" })
  transactionNumber: string;
}

export enum UpdateTransactionRequestBodySourceEnum {
    Shop = "SHOP"
}

export enum UpdateTransactionRequestBodyStatusEnum {
    Cancelled = "CANCELLED",
    Closed = "CLOSED",
    Pending = "PENDING"
}


export class UpdateTransactionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=active;" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "form, name=dateClosed;" })
  dateClosed?: Date;

  @SpeakeasyMetadata({ data: "form, name=dateCreated;" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "form, name=number;" })
  number?: string;

  @SpeakeasyMetadata({ data: "form, name=paymentMethod;" })
  paymentMethod?: string;

  @SpeakeasyMetadata({ data: "form, name=source;" })
  source?: UpdateTransactionRequestBodySourceEnum;

  @SpeakeasyMetadata({ data: "form, name=status;" })
  status?: UpdateTransactionRequestBodyStatusEnum;
}


export class UpdateTransactionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class UpdateTransactionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateTransactionPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateTransactionRequestBody;

  @SpeakeasyMetadata()
  security: UpdateTransactionSecurity;
}


export class UpdateTransactionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  netlicensing?: any;
}
