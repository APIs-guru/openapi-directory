package shared

// GoogleCloudWebriskV1RawHashes
// The uncompressed threat entries in hash format. Hashes can be anywhere from 4 to 32 bytes in size. A large majority are 4 bytes, but some hashes are lengthened if they collide with the hash of a popular URI. Used for sending ThreatEntryAdditons to clients that do not support compression, or when sending non-4-byte hashes to clients that do support compression.
type GoogleCloudWebriskV1RawHashes struct {
	PrefixSize *int32  `json:"prefixSize,omitempty"`
	RawHashes  *string `json:"rawHashes,omitempty"`
}
