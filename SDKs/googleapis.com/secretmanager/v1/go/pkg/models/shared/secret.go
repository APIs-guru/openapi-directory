package shared

type Secret struct {
	Annotations    map[string]string `json:"annotations"`
	CreateTime     *string           `json:"createTime"`
	Etag           *string           `json:"etag"`
	ExpireTime     *string           `json:"expireTime"`
	Labels         map[string]string `json:"labels"`
	Name           *string           `json:"name"`
	Replication    *Replication      `json:"replication"`
	Rotation       *Rotation         `json:"rotation"`
	Topics         []Topic           `json:"topics"`
	TTL            *string           `json:"ttl"`
	VersionAliases map[string]string `json:"versionAliases"`
}
