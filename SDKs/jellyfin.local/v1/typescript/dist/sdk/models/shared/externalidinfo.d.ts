import { SpeakeasyBase } from "../../../internal/utils";
import { ExternalIdMediaTypeEnum } from "./externalidmediatypeenum";
/**
 * Represents the external id information for serialization to the client.
**/
export declare class ExternalIdInfo extends SpeakeasyBase {
    key?: string;
    name?: string;
    type?: ExternalIdMediaTypeEnum;
    urlFormatString?: string;
}
