import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PromotionServiceTypeEnum {
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
export declare class Promotion extends SpeakeasyBase {
    creditMonthlyCap?: string;
    creditRemaining?: string;
    description?: string;
    expireDt?: string;
    imageUrl?: string;
    serviceType?: PromotionServiceTypeEnum;
    summary?: string;
    thisMonthCreditRemaining?: string;
}
