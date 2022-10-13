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

type Promotion struct {
	CreditMonthlyCap         *string                   `json:"credit_monthly_cap"`
	CreditRemaining          *string                   `json:"credit_remaining"`
	Description              *string                   `json:"description"`
	ExpireDt                 *string                   `json:"expire_dt"`
	ImageURL                 *string                   `json:"image_url"`
	ServiceType              *PromotionServiceTypeEnum `json:"service_type"`
	Summary                  *string                   `json:"summary"`
	ThisMonthCreditRemaining *string                   `json:"this_month_credit_remaining"`
}
