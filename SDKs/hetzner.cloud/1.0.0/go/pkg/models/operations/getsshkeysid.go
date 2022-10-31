package operations



type GetSSHKeysIDPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetSSHKeysIDRequest struct {
    PathParams GetSSHKeysIDPathParams 
    
}

type GetSSHKeysID200ApplicationJSONSSHKey struct {
    Created string `json:"created"`
    Fingerprint string `json:"fingerprint"`
    ID int64 `json:"id"`
    Labels map[string]string `json:"labels"`
    Name string `json:"name"`
    PublicKey string `json:"public_key"`
    
}

type GetSSHKeysID200ApplicationJSON struct {
    SSHKey GetSSHKeysID200ApplicationJSONSSHKey `json:"ssh_key"`
    
}

type GetSSHKeysIDResponse struct {
    ContentType string 
    GetSSHKeysID200ApplicationJSONObject *GetSSHKeysID200ApplicationJSON 
    StatusCode int64 
    
}

