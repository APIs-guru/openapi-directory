import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum SubaccountAddRequestSubAccountEditEnum {
    AddAccount = "addAccount"
}
export declare class SubaccountAddRequest extends SpeakeasyBase {
    keyid: string;
    subAccountEdit: SubaccountAddRequestSubAccountEditEnum;
    subAccountLogin: string;
    subAccountPassword: string;
}
