import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.nowpayments.io"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * threeGetEstimatedPrice - 3. Get estimated price
     *
     * This is a method for calculating the approximate price in cryptocurrency for a given value in Fiat currency. You will need to provide the initial cost in the Fiat currency (amount, currency_from) and the necessary cryptocurrency (currency_to)
     * Currently following fiat currencies are available: usd, eur, nzd, brl, gbp.
    **/
    threeGetEstimatedPrice(req: operations.ThreeGetEstimatedPriceRequest, config?: AxiosRequestConfig): Promise<operations.ThreeGetEstimatedPriceResponse>;
    /**
     * sixGetTheMinimumPaymentAmount - 6. Get the minimum payment amount
     *
     * Get the minimum payment amount for a specific pair.
     *
     * You can provide both currencies in the pair or just currency_from, and we will calculate the minimum payment amount for currency_from and currency which you have specified as the outcome in the Store Settings.
     *
     * In the case of several outcome wallets we will calculate the minimum amount in the same way we route your payment to a specific wallet.
    **/
    sixGetTheMinimumPaymentAmount(req: operations.SixGetTheMinimumPaymentAmountRequest, config?: AxiosRequestConfig): Promise<operations.SixGetTheMinimumPaymentAmountResponse>;
    /**
     * sevenGetListOfPayments - 7. Get list of payments
     *
     * Returns the entire list of all transactions, created with certain API key.
     * The list of optional parameters:
     * - limit - number of records in one page. (possible values: from 1 to 500)
     * - page - the page number you want to get (possible values: from 0 to **page count - 1**)
     * - sortBy - sort the received list by a paramenter. Set to **created_at** by default (possible values: payment_id, payment_status, pay_address, price_amount, price_currency, pay_amount, actually_paid, pay_currency, order_id, order_description, purchase_id, outcome_amount, outcome_currency)
     * - orderBy - display the list in ascending or descending order. Set to **asc** by default (possible values: asc, desc)
     * - dateFrom - select the displayed period start date (date format: YYYY-MM-DD or yy-MM-ddTHH:mm:ss.SSSZ).
     * - dateTo - select the displayed period end date (date format: YYYY-MM-DD or yy-MM-ddTHH:mm:ss.SSSZ).
    **/
    sevenGetListOfPayments(req: operations.SevenGetListOfPaymentsRequest, config?: AxiosRequestConfig): Promise<operations.SevenGetListOfPaymentsResponse>;
}
export {};
