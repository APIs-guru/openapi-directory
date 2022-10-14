package shared

type Person struct {
	EmailAddresses []EmailAddress `json:"emailAddresses,omitempty"`
	Name           *string        `json:"name,omitempty"`
	ObfuscatedID   *string        `json:"obfuscatedId,omitempty"`
	PersonNames    []Name         `json:"personNames,omitempty"`
	PhoneNumbers   []PhoneNumber  `json:"phoneNumbers,omitempty"`
	Photos         []Photo        `json:"photos,omitempty"`
}
