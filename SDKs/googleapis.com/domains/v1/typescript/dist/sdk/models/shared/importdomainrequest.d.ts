import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request for the `ImportDomain` method.
**/
export declare class ImportDomainRequest extends SpeakeasyBase {
    domainName?: string;
    labels?: Map<string, string>;
}
