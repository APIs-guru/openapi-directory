

import requests
from typing import Any,List,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://ntp1node.nebl.io/",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
    
    
    
    def broadcast_tx(self, request: operations.BroadcastTxRequest) -> operations.BroadcastTxResponse:
        r"""Broadcasts a signed raw transaction to the network
        Broadcasts a signed raw transaction to the network. If successful returns the txid of the broadcast trasnaction.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ntp1/broadcast"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BroadcastTxResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BroadcastTxResponse])
                res.broadcast_tx_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def burn_token(self, request: operations.BurnTokenRequest) -> operations.BurnTokenResponse:
        r"""Builds a transaction that burns an NTP1 Token
        Builds an unsigned raw transaction that burns an NTP1 token on the Neblio blockchain.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ntp1/burntoken"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BurnTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BurnTokenResponse])
                res.burn_token_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_address(self, request: operations.GetAddressRequest) -> operations.GetAddressResponse:
        r"""Returns address object
        Returns NEBL address object containing information on a specific address
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ins/addr/{address}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAddressResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetAddressResponse])
                res.get_address_response = out

        return res

    
    def get_address_balance(self, request: operations.GetAddressBalanceRequest) -> operations.GetAddressBalanceResponse:
        r"""Returns address balance in sats
        Returns NEBL address balance in satoshis
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ins/addr/{address}/balance", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAddressBalanceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[float])
                res.get_address_balance_response = out

        return res

    
    def get_address_info(self, request: operations.GetAddressInfoRequest) -> operations.GetAddressInfoResponse:
        r"""Information On a Neblio Address
        Returns both NEBL and NTP1 token UTXOs held at the given address.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ntp1/addressinfo/{address}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAddressInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetAddressInfoResponse])
                res.get_address_info_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_address_total_received(self, request: operations.GetAddressTotalReceivedRequest) -> operations.GetAddressTotalReceivedResponse:
        r"""Returns total received by address in sats
        Returns total NEBL received by address in satoshis
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ins/addr/{address}/totalReceived", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAddressTotalReceivedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[float])
                res.get_address_total_received_response = out

        return res

    
    def get_address_total_sent(self, request: operations.GetAddressTotalSentRequest) -> operations.GetAddressTotalSentResponse:
        r"""Returns total sent by address in sats
        Returns total NEBL sent by address in satoshis
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ins/addr/{address}/totalSent", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAddressTotalSentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[float])
                res.get_address_total_sent_response = out

        return res

    
    def get_address_unconfirmed_balance(self, request: operations.GetAddressUnconfirmedBalanceRequest) -> operations.GetAddressUnconfirmedBalanceResponse:
        r"""Returns address unconfirmed balance in sats
        Returns NEBL address unconfirmed balance in satoshis
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ins/addr/{address}/unconfirmedBalance", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAddressUnconfirmedBalanceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[float])
                res.get_address_unconfirmed_balance_response = out

        return res

    
    def get_address_utxos(self, request: operations.GetAddressUtxosRequest) -> operations.GetAddressUtxosResponse:
        r"""Returns all UTXOs at a given address
        Returns information on each Unspent Transaction Output contained at an address
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ins/addr/{address}/utxo", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAddressUtxosResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.GetAddressUtxosResponse]])
                res.get_address_utxos_response = out

        return res

    
    def get_block(self, request: operations.GetBlockRequest) -> operations.GetBlockResponse:
        r"""Returns information regarding a Neblio block
        Returns blockchain data for a given block based upon the block hash
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ins/block/{blockhash}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBlockResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetBlockResponse])
                res.get_block_response = out

        return res

    
    def get_block_index(self, request: operations.GetBlockIndexRequest) -> operations.GetBlockIndexResponse:
        r"""Returns block hash of block
        Returns the block hash of a block at a given block index
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ins/block-index/{blockindex}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBlockIndexResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetBlockIndexResponse])
                res.get_block_index_response = out

        return res

    
    def get_raw_tx(self, request: operations.GetRawTxRequest) -> operations.GetRawTxResponse:
        r"""Returns raw transaction hex
        Returns raw transaction hex representing a NEBL transaction
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ins/rawtx/{txid}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRawTxResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetRawTxResponse])
                res.get_raw_tx_response = out

        return res

    
    def get_status(self, request: operations.GetStatusRequest) -> operations.GetStatusResponse:
        r"""Utility API for calling several blockchain node functions
        Utility API for calling several blockchain node functions - getInfo, getDifficulty, getBestBlockHash, getLastBlockHash
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ins/status"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_status_response = out

        return res

    
    def get_sync(self) -> operations.GetSyncResponse:
        r"""Get node sync status
        Returns information on the node's sync progress
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ins/sync"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSyncResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetSyncResponse])
                res.get_sync_response = out

        return res

    
    def get_token_holders(self, request: operations.GetTokenHoldersRequest) -> operations.GetTokenHoldersResponse:
        r"""Get Addresses Holding a Token
        Returns the the the addresses holding a token and how many tokens are held
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ntp1/stakeholders/{tokenid}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTokenHoldersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetTokenHoldersResponse])
                res.get_token_holders_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_token_id(self, request: operations.GetTokenIDRequest) -> operations.GetTokenIDResponse:
        r"""Returns the tokenId representing a token
        Translates a token symbol to a tokenId if a token exists with that symbol on the network
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ntp1/tokenid/{tokensymbol}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTokenIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetTokenIDResponse])
                res.get_token_id_response = out

        return res

    
    def get_token_metadata(self, request: operations.GetTokenMetadataRequest) -> operations.GetTokenMetadataResponse:
        r"""Get Metadata of Token
        Returns the metadata associated with a token.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ntp1/tokenmetadata/{tokenid}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTokenMetadataResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetTokenMetadataResponse])
                res.get_token_metadata_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_token_metadata_of_utxo(self, request: operations.GetTokenMetadataOfUtxoRequest) -> operations.GetTokenMetadataOfUtxoResponse:
        r"""Get UTXO Metadata of Token
        Returns the metadata associated with a token for that specific utxo instead of the issuance transaction.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ntp1/tokenmetadata/{tokenid}/{utxo}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTokenMetadataOfUtxoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetTokenMetadataResponse])
                res.get_token_metadata_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_transaction_info(self, request: operations.GetTransactionInfoRequest) -> operations.GetTransactionInfoResponse:
        r"""Information On an NTP1 Transaction
        Returns detailed information regarding an NTP1 transaction.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ntp1/transactioninfo/{txid}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTransactionInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetTransactionInfoResponse])
                res.get_transaction_info_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_tx(self, request: operations.GetTxRequest) -> operations.GetTxResponse:
        r"""Returns transaction object
        Returns NEBL transaction object representing a NEBL transaction
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ins/tx/{txid}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTxResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetTxResponse])
                res.get_tx_response = out

        return res

    
    def get_txs(self, request: operations.GetTxsRequest) -> operations.GetTxsResponse:
        r"""Get transactions by block or address
        Returns all transactions by block or address
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ins/txs"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTxsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetTxsResponse])
                res.get_txs_response = out

        return res

    
    def issue_token(self, request: operations.IssueTokenRequest) -> operations.IssueTokenResponse:
        r"""Builds a transaction that issues a new NTP1 Token
        Builds an unsigned raw transaction that issues a new NTP1 token on the Neblio blockchain.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ntp1/issue"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IssueTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IssueTokenResponse])
                res.issue_token_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def json_rpc(self, request: operations.JSONRPCRequest) -> operations.JSONRPCResponse:
        r"""Send a JSON-RPC call to a localhost neblio-Qt or nebliod node
        Call any Neblio RPC command from the Neblio API libraries. Useful for signing transactions with a local node and other functions. Will not work from a browser due to CORS restrictions. Requires a node to be running locally at 127.0.0.1
        """
        
        base_url = operations.JSON_RPC_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JSONRPCResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RPCResponse])
                res.rpc_response = out
        elif r.status_code == 401:
            res.headers = r.headers
            

        return res

    
    def send_token(self, request: operations.SendTokenRequest) -> operations.SendTokenResponse:
        r"""Builds a transaction that sends an NTP1 Token
        Builds an unsigned raw transaction that sends an NTP1 token on the Neblio blockchain.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ntp1/sendtoken"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SendTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SendTokenResponse])
                res.send_token_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def send_tx(self, request: operations.SendTxRequest) -> operations.SendTxResponse:
        r"""Broadcasts a signed raw transaction to the network (not NTP1 specific)
        Broadcasts a signed raw transaction to the network. If successful returns the txid of the broadcast trasnaction.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ins/tx/send"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SendTxResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BroadcastTxResponse])
                res.broadcast_tx_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def testnet_broadcast_tx(self, request: operations.TestnetBroadcastTxRequest) -> operations.TestnetBroadcastTxResponse:
        r"""Broadcasts a signed raw transaction to the network
        Broadcasts a signed raw transaction to the network. If successful returns the txid of the broadcast trasnaction.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/testnet/ntp1/broadcast"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TestnetBroadcastTxResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BroadcastTxResponse])
                res.broadcast_tx_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def testnet_burn_token(self, request: operations.TestnetBurnTokenRequest) -> operations.TestnetBurnTokenResponse:
        r"""Builds a transaction that burns an NTP1 Token
        Builds an unsigned raw transaction that burns an NTP1 token on the Neblio blockchain.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/testnet/ntp1/burntoken"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TestnetBurnTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BurnTokenResponse])
                res.burn_token_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def testnet_get_address(self, request: operations.TestnetGetAddressRequest) -> operations.TestnetGetAddressResponse:
        r"""Returns address object
        Returns NEBL address object containing information on a specific address
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/testnet/ins/addr/{address}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TestnetGetAddressResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetAddressResponse])
                res.get_address_response = out

        return res

    
    def testnet_get_address_balance(self, request: operations.TestnetGetAddressBalanceRequest) -> operations.TestnetGetAddressBalanceResponse:
        r"""Returns address balance in sats
        Returns NEBL address balance in satoshis
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/testnet/ins/addr/{address}/balance", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TestnetGetAddressBalanceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[float])
                res.get_address_balance_response = out

        return res

    
    def testnet_get_address_info(self, request: operations.TestnetGetAddressInfoRequest) -> operations.TestnetGetAddressInfoResponse:
        r"""Information On a Neblio Address
        Returns both NEBL and NTP1 token UTXOs held at the given address.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/testnet/ntp1/addressinfo/{address}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TestnetGetAddressInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetAddressInfoResponse])
                res.get_address_info_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def testnet_get_address_total_received(self, request: operations.TestnetGetAddressTotalReceivedRequest) -> operations.TestnetGetAddressTotalReceivedResponse:
        r"""Returns total received by address in sats
        Returns total NEBL received by address in satoshis
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/testnet/ins/addr/{address}/totalReceived", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TestnetGetAddressTotalReceivedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[float])
                res.get_address_total_received_response = out

        return res

    
    def testnet_get_address_total_sent(self, request: operations.TestnetGetAddressTotalSentRequest) -> operations.TestnetGetAddressTotalSentResponse:
        r"""Returns total sent by address in sats
        Returns total NEBL sent by address in satoshis
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/testnet/ins/addr/{address}/totalSent", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TestnetGetAddressTotalSentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[float])
                res.get_address_total_sent_response = out

        return res

    
    def testnet_get_address_unconfirmed_balance(self, request: operations.TestnetGetAddressUnconfirmedBalanceRequest) -> operations.TestnetGetAddressUnconfirmedBalanceResponse:
        r"""Returns address unconfirmed balance in sats
        Returns NEBL address unconfirmed balance in satoshis
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/testnet/ins/addr/{address}/unconfirmedBalance", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TestnetGetAddressUnconfirmedBalanceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[float])
                res.get_address_unconfirmed_balance_response = out

        return res

    
    def testnet_get_address_utxos(self, request: operations.TestnetGetAddressUtxosRequest) -> operations.TestnetGetAddressUtxosResponse:
        r"""Returns all UTXOs at a given address
        Returns information on each Unspent Transaction Output contained at an address
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/testnet/ins/addr/{address}/utxo", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TestnetGetAddressUtxosResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.GetAddressUtxosResponse]])
                res.get_address_utxos_response = out

        return res

    
    def testnet_get_block(self, request: operations.TestnetGetBlockRequest) -> operations.TestnetGetBlockResponse:
        r"""Returns information regarding a Neblio block
        Returns blockchain data for a given block based upon the block hash
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/testnet/ins/block/{blockhash}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TestnetGetBlockResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetBlockResponse])
                res.get_block_response = out

        return res

    
    def testnet_get_block_index(self, request: operations.TestnetGetBlockIndexRequest) -> operations.TestnetGetBlockIndexResponse:
        r"""Returns block hash of block
        Returns the block hash of a block at a given block index
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/testnet/ins/block-index/{blockindex}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TestnetGetBlockIndexResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetBlockIndexResponse])
                res.get_block_index_response = out

        return res

    
    def testnet_get_faucet(self, request: operations.TestnetGetFaucetRequest) -> operations.TestnetGetFaucetResponse:
        r"""Withdraws testnet NEBL to the specified address
        Withdraw testnet NEBL to your Neblio Testnet address. By default amount is 1500000000 or 15 NEBL and has a max of 50 NEBL. Only 2 withdrawals allowed per 24 hour period.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/testnet/faucet"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TestnetGetFaucetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetFaucetResponse])
                res.get_faucet_response = out

        return res

    
    def testnet_get_raw_tx(self, request: operations.TestnetGetRawTxRequest) -> operations.TestnetGetRawTxResponse:
        r"""Returns raw transaction hex
        Returns raw transaction hex representing a NEBL transaction
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/testnet/ins/rawtx/{txid}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TestnetGetRawTxResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetRawTxResponse])
                res.get_raw_tx_response = out

        return res

    
    def testnet_get_status(self, request: operations.TestnetGetStatusRequest) -> operations.TestnetGetStatusResponse:
        r"""Utility API for calling several blockchain node functions
        Utility API for calling several blockchain node functions - getInfo, getDifficulty, getBestBlockHash, getLastBlockHash
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/testnet/ins/status"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TestnetGetStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_status_response = out

        return res

    
    def testnet_get_sync(self) -> operations.TestnetGetSyncResponse:
        r"""Get node sync status
        Returns information on the node's sync progress
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/testnet/ins/sync"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TestnetGetSyncResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetSyncResponse])
                res.get_sync_response = out

        return res

    
    def testnet_get_token_holders(self, request: operations.TestnetGetTokenHoldersRequest) -> operations.TestnetGetTokenHoldersResponse:
        r"""Get Addresses Holding a Token
        Returns the the the addresses holding a token and how many tokens are held
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/testnet/ntp1/stakeholders/{tokenid}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TestnetGetTokenHoldersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetTokenHoldersResponse])
                res.get_token_holders_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def testnet_get_token_id(self, request: operations.TestnetGetTokenIDRequest) -> operations.TestnetGetTokenIDResponse:
        r"""Returns the tokenId representing a token
        Translates a token symbol to a tokenId if a token exists with that symbol on the network
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/testnet/ntp1/tokenid/{tokensymbol}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TestnetGetTokenIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetTokenIDResponse])
                res.get_token_id_response = out

        return res

    
    def testnet_get_token_metadata(self, request: operations.TestnetGetTokenMetadataRequest) -> operations.TestnetGetTokenMetadataResponse:
        r"""Get Metadata of Token
        Returns the metadata associated with a token.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/testnet/ntp1/tokenmetadata/{tokenid}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TestnetGetTokenMetadataResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetTokenMetadataResponse])
                res.get_token_metadata_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def testnet_get_token_metadata_of_utxo(self, request: operations.TestnetGetTokenMetadataOfUtxoRequest) -> operations.TestnetGetTokenMetadataOfUtxoResponse:
        r"""Get UTXO Metadata of Token
        Returns the metadata associated with a token for that specific utxo instead of the issuance transaction.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/testnet/ntp1/tokenmetadata/{tokenid}/{utxo}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TestnetGetTokenMetadataOfUtxoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetTokenMetadataResponse])
                res.get_token_metadata_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def testnet_get_transaction_info(self, request: operations.TestnetGetTransactionInfoRequest) -> operations.TestnetGetTransactionInfoResponse:
        r"""Information On an NTP1 Transaction
        Returns detailed information regarding an NTP1 transaction.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/testnet/ntp1/transactioninfo/{txid}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TestnetGetTransactionInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetTransactionInfoResponse])
                res.get_transaction_info_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def testnet_get_tx(self, request: operations.TestnetGetTxRequest) -> operations.TestnetGetTxResponse:
        r"""Returns transaction object
        Returns NEBL transaction object representing a NEBL transaction
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/testnet/ins/tx/{txid}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TestnetGetTxResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetTxResponse])
                res.get_tx_response = out

        return res

    
    def testnet_get_txs(self, request: operations.TestnetGetTxsRequest) -> operations.TestnetGetTxsResponse:
        r"""Get transactions by block or address
        Returns all transactions by block or address
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/testnet/ins/txs"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.TestnetGetTxsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetTxsResponse])
                res.get_txs_response = out

        return res

    
    def testnet_issue_token(self, request: operations.TestnetIssueTokenRequest) -> operations.TestnetIssueTokenResponse:
        r"""Builds a transaction that issues a new NTP1 Token
        Builds an unsigned raw transaction that issues a new NTP1 token on the Neblio blockchain.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/testnet/ntp1/issue"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TestnetIssueTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IssueTokenResponse])
                res.issue_token_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def testnet_send_token(self, request: operations.TestnetSendTokenRequest) -> operations.TestnetSendTokenResponse:
        r"""Builds a transaction that sends an NTP1 Token
        Builds an unsigned raw transaction that sends an NTP1 token on the Neblio blockchain.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/testnet/ntp1/sendtoken"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TestnetSendTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SendTokenResponse])
                res.send_token_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def testnet_send_tx(self, request: operations.TestnetSendTxRequest) -> operations.TestnetSendTxResponse:
        r"""Broadcasts a signed raw transaction to the network (not NTP1 specific)
        Broadcasts a signed raw transaction to the network. If successful returns the txid of the broadcast trasnaction.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/testnet/ins/tx/send"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TestnetSendTxResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BroadcastTxResponse])
                res.broadcast_tx_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    