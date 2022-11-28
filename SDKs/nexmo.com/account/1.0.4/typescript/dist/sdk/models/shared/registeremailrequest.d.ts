import { SpeakeasyBase } from "../../../internal/utils";
export declare enum RegisterEmailRequestProviderEnum {
    Email = "email"
}
export declare class RegisterEmailRequest extends SpeakeasyBase {
    applicationIds?: Map<string, any>;
    name?: string;
    provider: RegisterEmailRequestProviderEnum;
    value: string;
}
