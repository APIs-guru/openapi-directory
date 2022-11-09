import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SubaccountAddResponseEtatEtat extends SpeakeasyBase {
    code?: number;
    message?: string;
    subAccountId?: string;
    subAccountKeyId?: string;
    subAccountLogin?: string;
}
export declare class SubaccountAddResponseEtat extends SpeakeasyBase {
    etat?: SubaccountAddResponseEtatEtat[];
}
export declare class SubaccountAddResponse extends SpeakeasyBase {
    etat?: SubaccountAddResponseEtat;
}
