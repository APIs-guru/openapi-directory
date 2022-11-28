import { SpeakeasyBase } from "../../../internal/utils";
import { MetadataOptions } from "./metadataoptions";
export declare enum TransferOptionsOverwriteWhenEnum {
    OverwriteWhenUnspecified = "OVERWRITE_WHEN_UNSPECIFIED",
    Different = "DIFFERENT",
    Never = "NEVER",
    Always = "ALWAYS"
}
/**
 * TransferOptions define the actions to be performed on objects in a transfer.
**/
export declare class TransferOptions extends SpeakeasyBase {
    deleteObjectsFromSourceAfterTransfer?: boolean;
    deleteObjectsUniqueInSink?: boolean;
    metadataOptions?: MetadataOptions;
    overwriteObjectsAlreadyExistingInSink?: boolean;
    overwriteWhen?: TransferOptionsOverwriteWhenEnum;
}
