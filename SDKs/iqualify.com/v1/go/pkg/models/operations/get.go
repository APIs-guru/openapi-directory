package operations

type GetResponse struct {
	ContentType                 string
	Get200ApplicationJSONObject map[string]interface{}
	StatusCode                  int64
}
