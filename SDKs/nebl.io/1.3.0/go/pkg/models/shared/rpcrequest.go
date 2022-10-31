package shared



type RPCRequest struct {
    ID string `json:"id"`
    Jsonrpc string `json:"jsonrpc"`
    Method string `json:"method"`
    Params []string `json:"params"`
    
}

