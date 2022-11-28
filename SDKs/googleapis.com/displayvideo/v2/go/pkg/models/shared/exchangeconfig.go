package shared

// ExchangeConfig
// Settings that control which exchanges are enabled for a partner.
type ExchangeConfig struct {
	EnabledExchanges []ExchangeConfigEnabledExchange `json:"enabledExchanges,omitempty"`
}
