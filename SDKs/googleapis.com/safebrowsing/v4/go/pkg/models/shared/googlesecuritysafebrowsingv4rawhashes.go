package shared

// GoogleSecuritySafebrowsingV4RawHashes
// The uncompressed threat entries in hash format of a particular prefix length. Hashes can be anywhere from 4 to 32 bytes in size. A large majority are 4 bytes, but some hashes are lengthened if they collide with the hash of a popular URL. Used for sending ThreatEntrySet to clients that do not support compression, or when sending non-4-byte hashes to clients that do support compression.
type GoogleSecuritySafebrowsingV4RawHashes struct {
	PrefixSize *int32  `json:"prefixSize,omitempty"`
	RawHashes  *string `json:"rawHashes,omitempty"`
}
