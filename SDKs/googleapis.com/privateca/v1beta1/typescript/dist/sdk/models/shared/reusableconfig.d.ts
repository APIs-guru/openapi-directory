import { SpeakeasyBase } from "../../../internal/utils";
import { ReusableConfigValues } from "./reusableconfigvalues";
/**
 * A ReusableConfig refers to a managed ReusableConfigValues. Those, in turn, are used to describe certain fields of an X.509 certificate, such as the key usage fields, fields specific to CA certificates, certificate policy extensions and custom extensions.
**/
export declare class ReusableConfig extends SpeakeasyBase {
    createTime?: string;
    description?: string;
    labels?: Map<string, string>;
    name?: string;
    updateTime?: string;
    values?: ReusableConfigValues;
}
