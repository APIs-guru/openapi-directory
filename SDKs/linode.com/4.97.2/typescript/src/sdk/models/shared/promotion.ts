import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PromotionServiceTypeEnum {
    All = "all",
    Backup = "backup",
    Blockstorage = "blockstorage",
    DbMysql = "db_mysql",
    IpV4 = "ip_v4",
    Linode = "linode",
    LinodeDisk = "linode_disk",
    LinodeMemory = "linode_memory",
    Longview = "longview",
    Managed = "managed",
    Nodebalancer = "nodebalancer",
    Objectstorage = "objectstorage",
    TransferTx = "transfer_tx"
}


// Promotion
/** 
 * Promotions generally
 * offer a set amount of credit that can be used toward your Linode
 * services, and the promotion expires after a specified date. As well,
 * a monthly cap on the promotional offer is set.
 * 
 * Simply put, a promotion offers a certain amount of credit every
 * month, until either the expiration date is passed, or until the total
 * promotional credit is used, whichever comes first.
 * 
**/
export class Promotion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=credit_monthly_cap" })
  creditMonthlyCap?: string;

  @SpeakeasyMetadata({ data: "json, name=credit_remaining" })
  creditRemaining?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=expire_dt" })
  expireDt?: string;

  @SpeakeasyMetadata({ data: "json, name=image_url" })
  imageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=service_type" })
  serviceType?: PromotionServiceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=summary" })
  summary?: string;

  @SpeakeasyMetadata({ data: "json, name=this_month_credit_remaining" })
  thisMonthCreditRemaining?: string;
}
