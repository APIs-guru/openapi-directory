package shared

import (
	"time"
)

type AccountCreditCard struct {
	Expiry   *string `json:"expiry"`
	LastFour *string `json:"last_four"`
}

type Account struct {
	ActivePromotions  []Promotion        `json:"active_promotions"`
	ActiveSince       *time.Time         `json:"active_since"`
	Address1          *string            `json:"address_1"`
	Address2          *string            `json:"address_2"`
	Balance           *float64           `json:"balance"`
	BalanceUninvoiced *float64           `json:"balance_uninvoiced"`
	Capabilities      []string           `json:"capabilities"`
	City              *string            `json:"city"`
	Company           *string            `json:"company"`
	Country           *string            `json:"country"`
	CreditCard        *AccountCreditCard `json:"credit_card"`
	Email             *string            `json:"email"`
	Euuid             *string            `json:"euuid"`
	FirstName         *string            `json:"first_name"`
	LastName          *string            `json:"last_name"`
	Phone             *string            `json:"phone"`
	State             *string            `json:"state"`
	TaxID             *string            `json:"tax_id"`
	Zip               *string            `json:"zip"`
}
