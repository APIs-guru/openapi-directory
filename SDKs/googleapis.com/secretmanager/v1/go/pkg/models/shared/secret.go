package shared



type Secret struct {
    Annotations map[string]string `json:"annotations,omitempty"`
    CreateTime *string `json:"createTime,omitempty"`
    Etag *string `json:"etag,omitempty"`
    ExpireTime *string `json:"expireTime,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    Name *string `json:"name,omitempty"`
    Replication *Replication `json:"replication,omitempty"`
    Rotation *Rotation `json:"rotation,omitempty"`
    Topics []Topic `json:"topics,omitempty"`
    TTL *string `json:"ttl,omitempty"`
    VersionAliases map[string]string `json:"versionAliases,omitempty"`
    
}

