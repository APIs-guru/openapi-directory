import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SubaccountRequestSubAccountEditEnum {
    SetPrice = "setPrice",
    AddCredit = "addCredit",
    SetRestriction = "setRestriction"
}
export declare enum SubaccountRequestSubAccountRestrictionStopEnum {
    Zero = "0",
    One = "1"
}
export declare enum SubaccountRequestSubAccountRestrictionTimeEnum {
    Zero = "0",
    One = "1"
}
export declare class SubaccountRequest extends SpeakeasyBase {
    keyid: string;
    subAccountAddCredit?: string;
    subAccountCountryCode?: string;
    subAccountEdit: SubaccountRequestSubAccountEditEnum;
    subAccountKeyId?: string;
    subAccountPrice?: string;
    subAccountRestrictionStop?: SubaccountRequestSubAccountRestrictionStopEnum;
    subAccountRestrictionTime?: SubaccountRequestSubAccountRestrictionTimeEnum;
}
