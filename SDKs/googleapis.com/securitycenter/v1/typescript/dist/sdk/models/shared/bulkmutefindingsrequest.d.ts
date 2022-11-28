import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for bulk findings update. Note: 1. If multiple bulk update requests match the same resource, the order in which they get executed is not defined. 2. Once a bulk operation is started, there is no way to stop it.
**/
export declare class BulkMuteFindingsRequest extends SpeakeasyBase {
    filter?: string;
    muteAnnotation?: string;
}
