package operations



type PutSSHKeysIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type PutSSHKeysIDRequestBody struct {
    Labels map[string]interface{} `json:"labels,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

type PutSSHKeysIDRequest struct {
    PathParams PutSSHKeysIDPathParams 
    Request *PutSSHKeysIDRequestBody `request:"mediaType=application/json"`
    
}

type PutSSHKeysID200ApplicationJSONSSHKey struct {
    Created string `json:"created"`
    Fingerprint string `json:"fingerprint"`
    ID int64 `json:"id"`
    Labels map[string]string `json:"labels"`
    Name string `json:"name"`
    PublicKey string `json:"public_key"`
    
}

type PutSSHKeysID200ApplicationJSON struct {
    SSHKey PutSSHKeysID200ApplicationJSONSSHKey `json:"ssh_key"`
    
}

type PutSSHKeysIDResponse struct {
    ContentType string 
    PutSSHKeysID200ApplicationJSONObject *PutSSHKeysID200ApplicationJSON 
    StatusCode int64 
    
}

