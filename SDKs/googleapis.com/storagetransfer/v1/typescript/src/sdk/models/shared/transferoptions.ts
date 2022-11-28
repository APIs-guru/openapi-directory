import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetadataOptions } from "./metadataoptions";


export enum TransferOptionsOverwriteWhenEnum {
    OverwriteWhenUnspecified = "OVERWRITE_WHEN_UNSPECIFIED",
    Different = "DIFFERENT",
    Never = "NEVER",
    Always = "ALWAYS"
}


// TransferOptions
/** 
 * TransferOptions define the actions to be performed on objects in a transfer.
**/
export class TransferOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deleteObjectsFromSourceAfterTransfer" })
  deleteObjectsFromSourceAfterTransfer?: boolean;

  @SpeakeasyMetadata({ data: "json, name=deleteObjectsUniqueInSink" })
  deleteObjectsUniqueInSink?: boolean;

  @SpeakeasyMetadata({ data: "json, name=metadataOptions" })
  metadataOptions?: MetadataOptions;

  @SpeakeasyMetadata({ data: "json, name=overwriteObjectsAlreadyExistingInSink" })
  overwriteObjectsAlreadyExistingInSink?: boolean;

  @SpeakeasyMetadata({ data: "json, name=overwriteWhen" })
  overwriteWhen?: TransferOptionsOverwriteWhenEnum;
}
