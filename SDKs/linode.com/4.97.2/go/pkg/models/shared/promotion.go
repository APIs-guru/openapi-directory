package shared




type PromotionServiceTypeEnum string

const (
    PromotionServiceTypeEnumAll PromotionServiceTypeEnum = "all"
PromotionServiceTypeEnumBackup PromotionServiceTypeEnum = "backup"
PromotionServiceTypeEnumBlockstorage PromotionServiceTypeEnum = "blockstorage"
PromotionServiceTypeEnumDbMysql PromotionServiceTypeEnum = "db_mysql"
PromotionServiceTypeEnumIpv4 PromotionServiceTypeEnum = "ip_v4"
PromotionServiceTypeEnumLinode PromotionServiceTypeEnum = "linode"
PromotionServiceTypeEnumLinodeDisk PromotionServiceTypeEnum = "linode_disk"
PromotionServiceTypeEnumLinodeMemory PromotionServiceTypeEnum = "linode_memory"
PromotionServiceTypeEnumLongview PromotionServiceTypeEnum = "longview"
PromotionServiceTypeEnumManaged PromotionServiceTypeEnum = "managed"
PromotionServiceTypeEnumNodebalancer PromotionServiceTypeEnum = "nodebalancer"
PromotionServiceTypeEnumObjectstorage PromotionServiceTypeEnum = "objectstorage"
PromotionServiceTypeEnumTransferTx PromotionServiceTypeEnum = "transfer_tx"
)


type Promotion struct {
    CreditMonthlyCap *string `json:"credit_monthly_cap,omitempty"`
    CreditRemaining *string `json:"credit_remaining,omitempty"`
    Description *string `json:"description,omitempty"`
    ExpireDt *string `json:"expire_dt,omitempty"`
    ImageURL *string `json:"image_url,omitempty"`
    ServiceType *PromotionServiceTypeEnum `json:"service_type,omitempty"`
    Summary *string `json:"summary,omitempty"`
    ThisMonthCreditRemaining *string `json:"this_month_credit_remaining,omitempty"`
    
}

