package operations

type PostSSHKeysRequestBody struct {
	Labels    map[string]interface{} `json:"labels"`
	Name      string                 `json:"name"`
	PublicKey string                 `json:"public_key"`
}

type PostSSHKeysRequest struct {
	Request *PostSSHKeysRequestBody `request:"mediaType=application/json"`
}

type PostSSHKeys201ApplicationJSONSSHKey struct {
	Created     string            `json:"created"`
	Fingerprint string            `json:"fingerprint"`
	ID          int64             `json:"id"`
	Labels      map[string]string `json:"labels"`
	Name        string            `json:"name"`
	PublicKey   string            `json:"public_key"`
}

type PostSSHKeys201ApplicationJSON struct {
	SSHKey PostSSHKeys201ApplicationJSONSSHKey `json:"ssh_key"`
}

type PostSSHKeysResponse struct {
	ContentType                         string
	PostSSHKeys201ApplicationJSONObject *PostSSHKeys201ApplicationJSON
	StatusCode                          int64
}
