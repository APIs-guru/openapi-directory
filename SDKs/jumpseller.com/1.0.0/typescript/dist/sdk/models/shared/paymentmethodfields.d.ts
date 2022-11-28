import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PaymentMethodFieldsTypeEnum {
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
export declare class PaymentMethodFields extends SpeakeasyBase {
    id?: number;
    name?: string;
    type?: PaymentMethodFieldsTypeEnum;
}
