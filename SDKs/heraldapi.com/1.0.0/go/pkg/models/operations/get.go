package operations

type Get200ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetResponse struct {
	ContentType                 string
	StatusCode                  int64
	Get200ApplicationJSONObject *Get200ApplicationJSON
}
