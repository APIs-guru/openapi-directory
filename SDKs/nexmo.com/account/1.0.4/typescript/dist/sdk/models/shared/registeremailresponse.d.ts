import { SpeakeasyBase } from "../../../internal/utils";
export declare enum RegisterEmailResponseProviderEnum {
    Email = "email"
}
export declare class RegisterEmailResponse extends SpeakeasyBase {
    applicationIds?: string[];
    name?: string;
    provider?: RegisterEmailResponseProviderEnum;
    value?: string;
}
