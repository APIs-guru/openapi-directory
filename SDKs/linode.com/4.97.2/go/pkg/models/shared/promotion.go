package shared

type PromotionServiceTypeEnum string

const (
	PromotionServiceTypeEnumAll           PromotionServiceTypeEnum = "all"
	PromotionServiceTypeEnumBackup        PromotionServiceTypeEnum = "backup"
	PromotionServiceTypeEnumBlockstorage  PromotionServiceTypeEnum = "blockstorage"
	PromotionServiceTypeEnumDbMysql       PromotionServiceTypeEnum = "db_mysql"
	PromotionServiceTypeEnumIpv4          PromotionServiceTypeEnum = "ip_v4"
	PromotionServiceTypeEnumLinode        PromotionServiceTypeEnum = "linode"
	PromotionServiceTypeEnumLinodeDisk    PromotionServiceTypeEnum = "linode_disk"
	PromotionServiceTypeEnumLinodeMemory  PromotionServiceTypeEnum = "linode_memory"
	PromotionServiceTypeEnumLongview      PromotionServiceTypeEnum = "longview"
	PromotionServiceTypeEnumManaged       PromotionServiceTypeEnum = "managed"
	PromotionServiceTypeEnumNodebalancer  PromotionServiceTypeEnum = "nodebalancer"
	PromotionServiceTypeEnumObjectstorage PromotionServiceTypeEnum = "objectstorage"
	PromotionServiceTypeEnumTransferTx    PromotionServiceTypeEnum = "transfer_tx"
)

// Promotion
// Promotions generally
// offer a set amount of credit that can be used toward your Linode
// services, and the promotion expires after a specified date. As well,
// a monthly cap on the promotional offer is set.
//
// Simply put, a promotion offers a certain amount of credit every
// month, until either the expiration date is passed, or until the total
// promotional credit is used, whichever comes first.
type Promotion struct {
	CreditMonthlyCap         *string                   `json:"credit_monthly_cap,omitempty"`
	CreditRemaining          *string                   `json:"credit_remaining,omitempty"`
	Description              *string                   `json:"description,omitempty"`
	ExpireDt                 *string                   `json:"expire_dt,omitempty"`
	ImageURL                 *string                   `json:"image_url,omitempty"`
	ServiceType              *PromotionServiceTypeEnum `json:"service_type,omitempty"`
	Summary                  *string                   `json:"summary,omitempty"`
	ThisMonthCreditRemaining *string                   `json:"this_month_credit_remaining,omitempty"`
}
