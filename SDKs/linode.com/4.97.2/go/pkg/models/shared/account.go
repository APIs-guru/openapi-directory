package shared

import (
	"time"
)

type AccountCreditCard struct {
	Expiry   *string `json:"expiry,omitempty"`
	LastFour *string `json:"last_four,omitempty"`
}

type Account struct {
	ActivePromotions  []Promotion        `json:"active_promotions,omitempty"`
	ActiveSince       *time.Time         `json:"active_since,omitempty"`
	Address1          *string            `json:"address_1,omitempty"`
	Address2          *string            `json:"address_2,omitempty"`
	Balance           *float64           `json:"balance,omitempty"`
	BalanceUninvoiced *float64           `json:"balance_uninvoiced,omitempty"`
	Capabilities      []string           `json:"capabilities,omitempty"`
	City              *string            `json:"city,omitempty"`
	Company           *string            `json:"company,omitempty"`
	Country           *string            `json:"country,omitempty"`
	CreditCard        *AccountCreditCard `json:"credit_card,omitempty"`
	Email             *string            `json:"email,omitempty"`
	Euuid             *string            `json:"euuid,omitempty"`
	FirstName         *string            `json:"first_name,omitempty"`
	LastName          *string            `json:"last_name,omitempty"`
	Phone             *string            `json:"phone,omitempty"`
	State             *string            `json:"state,omitempty"`
	TaxID             *string            `json:"tax_id,omitempty"`
	Zip               *string            `json:"zip,omitempty"`
}
