import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Transaction {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createTransaction - Create Transaction
     *
     * Creates a new Transaction
    **/
    createTransaction(req: operations.CreateTransactionRequest, config?: AxiosRequestConfig): Promise<operations.CreateTransactionResponse>;
    /**
     * getTransaction - Get Transaction
     *
     * Return a Transaction by 'transactionNumber'
    **/
    getTransaction(req: operations.GetTransactionRequest, config?: AxiosRequestConfig): Promise<operations.GetTransactionResponse>;
    /**
     * listTransactions - List Transactions
     *
     * Return a list of all Transactions for the current Vendor
    **/
    listTransactions(req: operations.ListTransactionsRequest, config?: AxiosRequestConfig): Promise<operations.ListTransactionsResponse>;
    /**
     * updateTransaction - Update Transaction
     *
     * Sets the provided properties to a Transaction. Return an updated Transaction
    **/
    updateTransaction(req: operations.UpdateTransactionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTransactionResponse>;
}
