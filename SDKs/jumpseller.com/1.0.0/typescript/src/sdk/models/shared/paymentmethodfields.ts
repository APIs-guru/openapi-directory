import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PaymentMethodFieldsTypeEnum {
    Manual = "manual",
    Paypal = "paypal",
    Pagseguro = "pagseguro",
    Moneybookers = "moneybookers",
    WebpayCl = "webpay_cl",
    Easypay = "easypay",
    Easypaycc = "easypaycc",
    Easypayboleto = "easypayboleto",
    IdealBasic = "ideal_basic",
    Hipay = "hipay",
    Khipu = "khipu",
    MercadoPago = "mercado_pago",
    Ifthenpay = "ifthenpay",
    Eupago = "eupago",
    Stripe = "stripe",
    Payu = "payu",
    Servipag = "servipag"
}


export class PaymentMethodFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: PaymentMethodFieldsTypeEnum;
}
