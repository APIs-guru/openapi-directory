import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PartnerStoreCreatePlanNameEnum {
    Pro = "pro",
    Plus = "plus",
    Premium = "premium"
}
export declare class PartnerStoreCreate extends SpeakeasyBase {
    aff?: string;
    email?: string;
    locale?: string;
    password?: string;
    planName?: PartnerStoreCreatePlanNameEnum;
    rejectDuplicates?: boolean;
    storeName?: string;
}
