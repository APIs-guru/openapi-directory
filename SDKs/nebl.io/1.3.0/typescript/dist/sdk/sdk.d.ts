import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     * Broadcasts a signed raw transaction to the network. If successful returns the txid of the broadcast trasnaction.
     *
    **/
    BroadcastTx(req: operations.BroadcastTxRequest, config?: AxiosRequestConfig): Promise<operations.BroadcastTxResponse>;
    /**
     * Builds an unsigned raw transaction that burns an NTP1 token on the Neblio blockchain.
     *
    **/
    BurnToken(req: operations.BurnTokenRequest, config?: AxiosRequestConfig): Promise<operations.BurnTokenResponse>;
    /**
     * Returns NEBL address object containing information on a specific address
    **/
    GetAddress(req: operations.GetAddressRequest, config?: AxiosRequestConfig): Promise<operations.GetAddressResponse>;
    /**
     * Returns NEBL address balance in satoshis
    **/
    GetAddressBalance(req: operations.GetAddressBalanceRequest, config?: AxiosRequestConfig): Promise<operations.GetAddressBalanceResponse>;
    /**
     * Returns both NEBL and NTP1 token UTXOs held at the given address.
     *
    **/
    GetAddressInfo(req: operations.GetAddressInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetAddressInfoResponse>;
    /**
     * Returns total NEBL received by address in satoshis
    **/
    GetAddressTotalReceived(req: operations.GetAddressTotalReceivedRequest, config?: AxiosRequestConfig): Promise<operations.GetAddressTotalReceivedResponse>;
    /**
     * Returns total NEBL sent by address in satoshis
    **/
    GetAddressTotalSent(req: operations.GetAddressTotalSentRequest, config?: AxiosRequestConfig): Promise<operations.GetAddressTotalSentResponse>;
    /**
     * Returns NEBL address unconfirmed balance in satoshis
    **/
    GetAddressUnconfirmedBalance(req: operations.GetAddressUnconfirmedBalanceRequest, config?: AxiosRequestConfig): Promise<operations.GetAddressUnconfirmedBalanceResponse>;
    /**
     * Returns information on each Unspent Transaction Output contained at an address
    **/
    GetAddressUtxos(req: operations.GetAddressUtxosRequest, config?: AxiosRequestConfig): Promise<operations.GetAddressUtxosResponse>;
    /**
     * Returns blockchain data for a given block based upon the block hash
    **/
    GetBlock(req: operations.GetBlockRequest, config?: AxiosRequestConfig): Promise<operations.GetBlockResponse>;
    /**
     * Returns the block hash of a block at a given block index
    **/
    GetBlockIndex(req: operations.GetBlockIndexRequest, config?: AxiosRequestConfig): Promise<operations.GetBlockIndexResponse>;
    /**
     * Returns raw transaction hex representing a NEBL transaction
    **/
    GetRawTx(req: operations.GetRawTxRequest, config?: AxiosRequestConfig): Promise<operations.GetRawTxResponse>;
    /**
     * Utility API for calling several blockchain node functions - getInfo, getDifficulty, getBestBlockHash, getLastBlockHash
    **/
    GetStatus(req: operations.GetStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetStatusResponse>;
    /**
     * Returns information on the node's sync progress
    **/
    GetSync(config?: AxiosRequestConfig): Promise<operations.GetSyncResponse>;
    /**
     * Returns the the the addresses holding a token and how many tokens are held
     *
    **/
    GetTokenHolders(req: operations.GetTokenHoldersRequest, config?: AxiosRequestConfig): Promise<operations.GetTokenHoldersResponse>;
    /**
     * Translates a token symbol to a tokenId if a token exists with that symbol on the network
     *
    **/
    GetTokenId(req: operations.GetTokenIdRequest, config?: AxiosRequestConfig): Promise<operations.GetTokenIdResponse>;
    /**
     * Returns the metadata associated with a token.
     *
    **/
    GetTokenMetadata(req: operations.GetTokenMetadataRequest, config?: AxiosRequestConfig): Promise<operations.GetTokenMetadataResponse>;
    /**
     * Returns the metadata associated with a token for that specific utxo instead of the issuance transaction.
     *
    **/
    GetTokenMetadataOfUtxo(req: operations.GetTokenMetadataOfUtxoRequest, config?: AxiosRequestConfig): Promise<operations.GetTokenMetadataOfUtxoResponse>;
    /**
     * Returns detailed information regarding an NTP1 transaction.
     *
    **/
    GetTransactionInfo(req: operations.GetTransactionInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetTransactionInfoResponse>;
    /**
     * Returns NEBL transaction object representing a NEBL transaction
    **/
    GetTx(req: operations.GetTxRequest, config?: AxiosRequestConfig): Promise<operations.GetTxResponse>;
    /**
     * Returns all transactions by block or address
    **/
    GetTxs(req: operations.GetTxsRequest, config?: AxiosRequestConfig): Promise<operations.GetTxsResponse>;
    /**
     * Builds an unsigned raw transaction that issues a new NTP1 token on the Neblio blockchain.
     *
    **/
    IssueToken(req: operations.IssueTokenRequest, config?: AxiosRequestConfig): Promise<operations.IssueTokenResponse>;
    /**
     * Call any Neblio RPC command from the Neblio API libraries. Useful for signing transactions with a local node and other functions. Will not work from a browser due to CORS restrictions. Requires a node to be running locally at 127.0.0.1
    **/
    JsonRpc(req: operations.JsonRpcRequest, config?: AxiosRequestConfig): Promise<operations.JsonRpcResponse>;
    /**
     * Builds an unsigned raw transaction that sends an NTP1 token on the Neblio blockchain.
     *
    **/
    SendToken(req: operations.SendTokenRequest, config?: AxiosRequestConfig): Promise<operations.SendTokenResponse>;
    /**
     * Broadcasts a signed raw transaction to the network. If successful returns the txid of the broadcast trasnaction.
     *
    **/
    SendTx(req: operations.SendTxRequest, config?: AxiosRequestConfig): Promise<operations.SendTxResponse>;
    /**
     * Broadcasts a signed raw transaction to the network. If successful returns the txid of the broadcast trasnaction.
     *
    **/
    TestnetBroadcastTx(req: operations.TestnetBroadcastTxRequest, config?: AxiosRequestConfig): Promise<operations.TestnetBroadcastTxResponse>;
    /**
     * Builds an unsigned raw transaction that burns an NTP1 token on the Neblio blockchain.
     *
    **/
    TestnetBurnToken(req: operations.TestnetBurnTokenRequest, config?: AxiosRequestConfig): Promise<operations.TestnetBurnTokenResponse>;
    /**
     * Returns NEBL address object containing information on a specific address
    **/
    TestnetGetAddress(req: operations.TestnetGetAddressRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetAddressResponse>;
    /**
     * Returns NEBL address balance in satoshis
    **/
    TestnetGetAddressBalance(req: operations.TestnetGetAddressBalanceRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetAddressBalanceResponse>;
    /**
     * Returns both NEBL and NTP1 token UTXOs held at the given address.
     *
    **/
    TestnetGetAddressInfo(req: operations.TestnetGetAddressInfoRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetAddressInfoResponse>;
    /**
     * Returns total NEBL received by address in satoshis
    **/
    TestnetGetAddressTotalReceived(req: operations.TestnetGetAddressTotalReceivedRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetAddressTotalReceivedResponse>;
    /**
     * Returns total NEBL sent by address in satoshis
    **/
    TestnetGetAddressTotalSent(req: operations.TestnetGetAddressTotalSentRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetAddressTotalSentResponse>;
    /**
     * Returns NEBL address unconfirmed balance in satoshis
    **/
    TestnetGetAddressUnconfirmedBalance(req: operations.TestnetGetAddressUnconfirmedBalanceRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetAddressUnconfirmedBalanceResponse>;
    /**
     * Returns information on each Unspent Transaction Output contained at an address
    **/
    TestnetGetAddressUtxos(req: operations.TestnetGetAddressUtxosRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetAddressUtxosResponse>;
    /**
     * Returns blockchain data for a given block based upon the block hash
    **/
    TestnetGetBlock(req: operations.TestnetGetBlockRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetBlockResponse>;
    /**
     * Returns the block hash of a block at a given block index
    **/
    TestnetGetBlockIndex(req: operations.TestnetGetBlockIndexRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetBlockIndexResponse>;
    /**
     * Withdraw testnet NEBL to your Neblio Testnet address. By default amount is 1500000000 or 15 NEBL and has a max of 50 NEBL. Only 2 withdrawals allowed per 24 hour period.
     *
    **/
    TestnetGetFaucet(req: operations.TestnetGetFaucetRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetFaucetResponse>;
    /**
     * Returns raw transaction hex representing a NEBL transaction
    **/
    TestnetGetRawTx(req: operations.TestnetGetRawTxRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetRawTxResponse>;
    /**
     * Utility API for calling several blockchain node functions - getInfo, getDifficulty, getBestBlockHash, getLastBlockHash
    **/
    TestnetGetStatus(req: operations.TestnetGetStatusRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetStatusResponse>;
    /**
     * Returns information on the node's sync progress
    **/
    TestnetGetSync(config?: AxiosRequestConfig): Promise<operations.TestnetGetSyncResponse>;
    /**
     * Returns the the the addresses holding a token and how many tokens are held
     *
    **/
    TestnetGetTokenHolders(req: operations.TestnetGetTokenHoldersRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetTokenHoldersResponse>;
    /**
     * Translates a token symbol to a tokenId if a token exists with that symbol on the network
     *
    **/
    TestnetGetTokenId(req: operations.TestnetGetTokenIdRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetTokenIdResponse>;
    /**
     * Returns the metadata associated with a token.
     *
    **/
    TestnetGetTokenMetadata(req: operations.TestnetGetTokenMetadataRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetTokenMetadataResponse>;
    /**
     * Returns the metadata associated with a token for that specific utxo instead of the issuance transaction.
     *
    **/
    TestnetGetTokenMetadataOfUtxo(req: operations.TestnetGetTokenMetadataOfUtxoRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetTokenMetadataOfUtxoResponse>;
    /**
     * Returns detailed information regarding an NTP1 transaction.
     *
    **/
    TestnetGetTransactionInfo(req: operations.TestnetGetTransactionInfoRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetTransactionInfoResponse>;
    /**
     * Returns NEBL transaction object representing a NEBL transaction
    **/
    TestnetGetTx(req: operations.TestnetGetTxRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetTxResponse>;
    /**
     * Returns all transactions by block or address
    **/
    TestnetGetTxs(req: operations.TestnetGetTxsRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetTxsResponse>;
    /**
     * Builds an unsigned raw transaction that issues a new NTP1 token on the Neblio blockchain.
     *
    **/
    TestnetIssueToken(req: operations.TestnetIssueTokenRequest, config?: AxiosRequestConfig): Promise<operations.TestnetIssueTokenResponse>;
    /**
     * Builds an unsigned raw transaction that sends an NTP1 token on the Neblio blockchain.
     *
    **/
    TestnetSendToken(req: operations.TestnetSendTokenRequest, config?: AxiosRequestConfig): Promise<operations.TestnetSendTokenResponse>;
    /**
     * Broadcasts a signed raw transaction to the network. If successful returns the txid of the broadcast trasnaction.
     *
    **/
    TestnetSendTx(req: operations.TestnetSendTxRequest, config?: AxiosRequestConfig): Promise<operations.TestnetSendTxResponse>;
}
export {};
