import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PaymentMethodFieldsTypeEnum {
    Manual = "manual"
,    Paypal = "paypal"
,    Pagseguro = "pagseguro"
,    Moneybookers = "moneybookers"
,    WebpayCl = "webpay_cl"
,    Easypay = "easypay"
,    Easypaycc = "easypaycc"
,    Easypayboleto = "easypayboleto"
,    IdealBasic = "ideal_basic"
,    Hipay = "hipay"
,    Khipu = "khipu"
,    MercadoPago = "mercado_pago"
,    Ifthenpay = "ifthenpay"
,    Eupago = "eupago"
,    Stripe = "stripe"
,    Payu = "payu"
,    Servipag = "servipag"
}


export class PaymentMethodFields extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=type" })
  type?: PaymentMethodFieldsTypeEnum;
}
