package shared

type Person struct {
	EmailAddresses []EmailAddress `json:"emailAddresses"`
	Name           *string        `json:"name"`
	ObfuscatedID   *string        `json:"obfuscatedId"`
	PersonNames    []Name         `json:"personNames"`
	PhoneNumbers   []PhoneNumber  `json:"phoneNumbers"`
	Photos         []Photo        `json:"photos"`
}
