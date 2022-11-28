package operations

import (
	"openapi/pkg/models/shared"
)

var JSONRPCServerList = []string{
	"http://127.0.0.1:6326",
	"http://127.0.0.1:16326",
}

type JSONRPCSecurity struct {
	RPCAuth shared.SchemeRPCAuth `security:"scheme,type=http,subtype=basic"`
}

type JSONRPCRequest struct {
	ServerURL *string
	Request   shared.RPCRequest `request:"mediaType=application/json"`
	Security  JSONRPCSecurity
}

type JSONRPCResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
	RPCResponse *shared.RPCResponse
}
