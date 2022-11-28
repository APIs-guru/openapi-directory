import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://ntp1node.nebl.io/"];
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
     * broadcastTx - Broadcasts a signed raw transaction to the network
     *
     * Broadcasts a signed raw transaction to the network. If successful returns the txid of the broadcast trasnaction.
     *
    **/
    broadcastTx(req: operations.BroadcastTxRequest, config?: AxiosRequestConfig): Promise<operations.BroadcastTxResponse>;
    /**
     * burnToken - Builds a transaction that burns an NTP1 Token
     *
     * Builds an unsigned raw transaction that burns an NTP1 token on the Neblio blockchain.
     *
    **/
    burnToken(req: operations.BurnTokenRequest, config?: AxiosRequestConfig): Promise<operations.BurnTokenResponse>;
    /**
     * getAddress - Returns address object
     *
     * Returns NEBL address object containing information on a specific address
    **/
    getAddress(req: operations.GetAddressRequest, config?: AxiosRequestConfig): Promise<operations.GetAddressResponse>;
    /**
     * getAddressBalance - Returns address balance in sats
     *
     * Returns NEBL address balance in satoshis
    **/
    getAddressBalance(req: operations.GetAddressBalanceRequest, config?: AxiosRequestConfig): Promise<operations.GetAddressBalanceResponse>;
    /**
     * getAddressInfo - Information On a Neblio Address
     *
     * Returns both NEBL and NTP1 token UTXOs held at the given address.
     *
    **/
    getAddressInfo(req: operations.GetAddressInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetAddressInfoResponse>;
    /**
     * getAddressTotalReceived - Returns total received by address in sats
     *
     * Returns total NEBL received by address in satoshis
    **/
    getAddressTotalReceived(req: operations.GetAddressTotalReceivedRequest, config?: AxiosRequestConfig): Promise<operations.GetAddressTotalReceivedResponse>;
    /**
     * getAddressTotalSent - Returns total sent by address in sats
     *
     * Returns total NEBL sent by address in satoshis
    **/
    getAddressTotalSent(req: operations.GetAddressTotalSentRequest, config?: AxiosRequestConfig): Promise<operations.GetAddressTotalSentResponse>;
    /**
     * getAddressUnconfirmedBalance - Returns address unconfirmed balance in sats
     *
     * Returns NEBL address unconfirmed balance in satoshis
    **/
    getAddressUnconfirmedBalance(req: operations.GetAddressUnconfirmedBalanceRequest, config?: AxiosRequestConfig): Promise<operations.GetAddressUnconfirmedBalanceResponse>;
    /**
     * getAddressUtxos - Returns all UTXOs at a given address
     *
     * Returns information on each Unspent Transaction Output contained at an address
    **/
    getAddressUtxos(req: operations.GetAddressUtxosRequest, config?: AxiosRequestConfig): Promise<operations.GetAddressUtxosResponse>;
    /**
     * getBlock - Returns information regarding a Neblio block
     *
     * Returns blockchain data for a given block based upon the block hash
    **/
    getBlock(req: operations.GetBlockRequest, config?: AxiosRequestConfig): Promise<operations.GetBlockResponse>;
    /**
     * getBlockIndex - Returns block hash of block
     *
     * Returns the block hash of a block at a given block index
    **/
    getBlockIndex(req: operations.GetBlockIndexRequest, config?: AxiosRequestConfig): Promise<operations.GetBlockIndexResponse>;
    /**
     * getRawTx - Returns raw transaction hex
     *
     * Returns raw transaction hex representing a NEBL transaction
    **/
    getRawTx(req: operations.GetRawTxRequest, config?: AxiosRequestConfig): Promise<operations.GetRawTxResponse>;
    /**
     * getStatus - Utility API for calling several blockchain node functions
     *
     * Utility API for calling several blockchain node functions - getInfo, getDifficulty, getBestBlockHash, getLastBlockHash
    **/
    getStatus(req: operations.GetStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetStatusResponse>;
    /**
     * getSync - Get node sync status
     *
     * Returns information on the node's sync progress
    **/
    getSync(config?: AxiosRequestConfig): Promise<operations.GetSyncResponse>;
    /**
     * getTokenHolders - Get Addresses Holding a Token
     *
     * Returns the the the addresses holding a token and how many tokens are held
     *
    **/
    getTokenHolders(req: operations.GetTokenHoldersRequest, config?: AxiosRequestConfig): Promise<operations.GetTokenHoldersResponse>;
    /**
     * getTokenId - Returns the tokenId representing a token
     *
     * Translates a token symbol to a tokenId if a token exists with that symbol on the network
     *
    **/
    getTokenId(req: operations.GetTokenIdRequest, config?: AxiosRequestConfig): Promise<operations.GetTokenIdResponse>;
    /**
     * getTokenMetadata - Get Metadata of Token
     *
     * Returns the metadata associated with a token.
     *
    **/
    getTokenMetadata(req: operations.GetTokenMetadataRequest, config?: AxiosRequestConfig): Promise<operations.GetTokenMetadataResponse>;
    /**
     * getTokenMetadataOfUtxo - Get UTXO Metadata of Token
     *
     * Returns the metadata associated with a token for that specific utxo instead of the issuance transaction.
     *
    **/
    getTokenMetadataOfUtxo(req: operations.GetTokenMetadataOfUtxoRequest, config?: AxiosRequestConfig): Promise<operations.GetTokenMetadataOfUtxoResponse>;
    /**
     * getTransactionInfo - Information On an NTP1 Transaction
     *
     * Returns detailed information regarding an NTP1 transaction.
     *
    **/
    getTransactionInfo(req: operations.GetTransactionInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetTransactionInfoResponse>;
    /**
     * getTx - Returns transaction object
     *
     * Returns NEBL transaction object representing a NEBL transaction
    **/
    getTx(req: operations.GetTxRequest, config?: AxiosRequestConfig): Promise<operations.GetTxResponse>;
    /**
     * getTxs - Get transactions by block or address
     *
     * Returns all transactions by block or address
    **/
    getTxs(req: operations.GetTxsRequest, config?: AxiosRequestConfig): Promise<operations.GetTxsResponse>;
    /**
     * issueToken - Builds a transaction that issues a new NTP1 Token
     *
     * Builds an unsigned raw transaction that issues a new NTP1 token on the Neblio blockchain.
     *
    **/
    issueToken(req: operations.IssueTokenRequest, config?: AxiosRequestConfig): Promise<operations.IssueTokenResponse>;
    /**
     * jsonRpc - Send a JSON-RPC call to a localhost neblio-Qt or nebliod node
     *
     * Call any Neblio RPC command from the Neblio API libraries. Useful for signing transactions with a local node and other functions. Will not work from a browser due to CORS restrictions. Requires a node to be running locally at 127.0.0.1
    **/
    jsonRpc(req: operations.JsonRpcRequest, config?: AxiosRequestConfig): Promise<operations.JsonRpcResponse>;
    /**
     * sendToken - Builds a transaction that sends an NTP1 Token
     *
     * Builds an unsigned raw transaction that sends an NTP1 token on the Neblio blockchain.
     *
    **/
    sendToken(req: operations.SendTokenRequest, config?: AxiosRequestConfig): Promise<operations.SendTokenResponse>;
    /**
     * sendTx - Broadcasts a signed raw transaction to the network (not NTP1 specific)
     *
     * Broadcasts a signed raw transaction to the network. If successful returns the txid of the broadcast trasnaction.
     *
    **/
    sendTx(req: operations.SendTxRequest, config?: AxiosRequestConfig): Promise<operations.SendTxResponse>;
    /**
     * testnetBroadcastTx - Broadcasts a signed raw transaction to the network
     *
     * Broadcasts a signed raw transaction to the network. If successful returns the txid of the broadcast trasnaction.
     *
    **/
    testnetBroadcastTx(req: operations.TestnetBroadcastTxRequest, config?: AxiosRequestConfig): Promise<operations.TestnetBroadcastTxResponse>;
    /**
     * testnetBurnToken - Builds a transaction that burns an NTP1 Token
     *
     * Builds an unsigned raw transaction that burns an NTP1 token on the Neblio blockchain.
     *
    **/
    testnetBurnToken(req: operations.TestnetBurnTokenRequest, config?: AxiosRequestConfig): Promise<operations.TestnetBurnTokenResponse>;
    /**
     * testnetGetAddress - Returns address object
     *
     * Returns NEBL address object containing information on a specific address
    **/
    testnetGetAddress(req: operations.TestnetGetAddressRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetAddressResponse>;
    /**
     * testnetGetAddressBalance - Returns address balance in sats
     *
     * Returns NEBL address balance in satoshis
    **/
    testnetGetAddressBalance(req: operations.TestnetGetAddressBalanceRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetAddressBalanceResponse>;
    /**
     * testnetGetAddressInfo - Information On a Neblio Address
     *
     * Returns both NEBL and NTP1 token UTXOs held at the given address.
     *
    **/
    testnetGetAddressInfo(req: operations.TestnetGetAddressInfoRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetAddressInfoResponse>;
    /**
     * testnetGetAddressTotalReceived - Returns total received by address in sats
     *
     * Returns total NEBL received by address in satoshis
    **/
    testnetGetAddressTotalReceived(req: operations.TestnetGetAddressTotalReceivedRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetAddressTotalReceivedResponse>;
    /**
     * testnetGetAddressTotalSent - Returns total sent by address in sats
     *
     * Returns total NEBL sent by address in satoshis
    **/
    testnetGetAddressTotalSent(req: operations.TestnetGetAddressTotalSentRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetAddressTotalSentResponse>;
    /**
     * testnetGetAddressUnconfirmedBalance - Returns address unconfirmed balance in sats
     *
     * Returns NEBL address unconfirmed balance in satoshis
    **/
    testnetGetAddressUnconfirmedBalance(req: operations.TestnetGetAddressUnconfirmedBalanceRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetAddressUnconfirmedBalanceResponse>;
    /**
     * testnetGetAddressUtxos - Returns all UTXOs at a given address
     *
     * Returns information on each Unspent Transaction Output contained at an address
    **/
    testnetGetAddressUtxos(req: operations.TestnetGetAddressUtxosRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetAddressUtxosResponse>;
    /**
     * testnetGetBlock - Returns information regarding a Neblio block
     *
     * Returns blockchain data for a given block based upon the block hash
    **/
    testnetGetBlock(req: operations.TestnetGetBlockRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetBlockResponse>;
    /**
     * testnetGetBlockIndex - Returns block hash of block
     *
     * Returns the block hash of a block at a given block index
    **/
    testnetGetBlockIndex(req: operations.TestnetGetBlockIndexRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetBlockIndexResponse>;
    /**
     * testnetGetFaucet - Withdraws testnet NEBL to the specified address
     *
     * Withdraw testnet NEBL to your Neblio Testnet address. By default amount is 1500000000 or 15 NEBL and has a max of 50 NEBL. Only 2 withdrawals allowed per 24 hour period.
     *
    **/
    testnetGetFaucet(req: operations.TestnetGetFaucetRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetFaucetResponse>;
    /**
     * testnetGetRawTx - Returns raw transaction hex
     *
     * Returns raw transaction hex representing a NEBL transaction
    **/
    testnetGetRawTx(req: operations.TestnetGetRawTxRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetRawTxResponse>;
    /**
     * testnetGetStatus - Utility API for calling several blockchain node functions
     *
     * Utility API for calling several blockchain node functions - getInfo, getDifficulty, getBestBlockHash, getLastBlockHash
    **/
    testnetGetStatus(req: operations.TestnetGetStatusRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetStatusResponse>;
    /**
     * testnetGetSync - Get node sync status
     *
     * Returns information on the node's sync progress
    **/
    testnetGetSync(config?: AxiosRequestConfig): Promise<operations.TestnetGetSyncResponse>;
    /**
     * testnetGetTokenHolders - Get Addresses Holding a Token
     *
     * Returns the the the addresses holding a token and how many tokens are held
     *
    **/
    testnetGetTokenHolders(req: operations.TestnetGetTokenHoldersRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetTokenHoldersResponse>;
    /**
     * testnetGetTokenId - Returns the tokenId representing a token
     *
     * Translates a token symbol to a tokenId if a token exists with that symbol on the network
     *
    **/
    testnetGetTokenId(req: operations.TestnetGetTokenIdRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetTokenIdResponse>;
    /**
     * testnetGetTokenMetadata - Get Metadata of Token
     *
     * Returns the metadata associated with a token.
     *
    **/
    testnetGetTokenMetadata(req: operations.TestnetGetTokenMetadataRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetTokenMetadataResponse>;
    /**
     * testnetGetTokenMetadataOfUtxo - Get UTXO Metadata of Token
     *
     * Returns the metadata associated with a token for that specific utxo instead of the issuance transaction.
     *
    **/
    testnetGetTokenMetadataOfUtxo(req: operations.TestnetGetTokenMetadataOfUtxoRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetTokenMetadataOfUtxoResponse>;
    /**
     * testnetGetTransactionInfo - Information On an NTP1 Transaction
     *
     * Returns detailed information regarding an NTP1 transaction.
     *
    **/
    testnetGetTransactionInfo(req: operations.TestnetGetTransactionInfoRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetTransactionInfoResponse>;
    /**
     * testnetGetTx - Returns transaction object
     *
     * Returns NEBL transaction object representing a NEBL transaction
    **/
    testnetGetTx(req: operations.TestnetGetTxRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetTxResponse>;
    /**
     * testnetGetTxs - Get transactions by block or address
     *
     * Returns all transactions by block or address
    **/
    testnetGetTxs(req: operations.TestnetGetTxsRequest, config?: AxiosRequestConfig): Promise<operations.TestnetGetTxsResponse>;
    /**
     * testnetIssueToken - Builds a transaction that issues a new NTP1 Token
     *
     * Builds an unsigned raw transaction that issues a new NTP1 token on the Neblio blockchain.
     *
    **/
    testnetIssueToken(req: operations.TestnetIssueTokenRequest, config?: AxiosRequestConfig): Promise<operations.TestnetIssueTokenResponse>;
    /**
     * testnetSendToken - Builds a transaction that sends an NTP1 Token
     *
     * Builds an unsigned raw transaction that sends an NTP1 token on the Neblio blockchain.
     *
    **/
    testnetSendToken(req: operations.TestnetSendTokenRequest, config?: AxiosRequestConfig): Promise<operations.TestnetSendTokenResponse>;
    /**
     * testnetSendTx - Broadcasts a signed raw transaction to the network (not NTP1 specific)
     *
     * Broadcasts a signed raw transaction to the network. If successful returns the txid of the broadcast trasnaction.
     *
    **/
    testnetSendTx(req: operations.TestnetSendTxRequest, config?: AxiosRequestConfig): Promise<operations.TestnetSendTxResponse>;
}
export {};
