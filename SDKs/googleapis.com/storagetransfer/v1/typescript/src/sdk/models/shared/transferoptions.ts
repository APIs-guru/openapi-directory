import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MetadataOptions } from "./metadataoptions";

export enum TransferOptionsOverwriteWhenEnum {
    OverwriteWhenUnspecified = "OVERWRITE_WHEN_UNSPECIFIED"
,    Different = "DIFFERENT"
,    Never = "NEVER"
,    Always = "ALWAYS"
}


// TransferOptions
/** 
 * TransferOptions define the actions to be performed on objects in a transfer.
**/
export class TransferOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=deleteObjectsFromSourceAfterTransfer" })
  deleteObjectsFromSourceAfterTransfer?: boolean;

  @Metadata({ data: "json, name=deleteObjectsUniqueInSink" })
  deleteObjectsUniqueInSink?: boolean;

  @Metadata({ data: "json, name=metadataOptions" })
  metadataOptions?: MetadataOptions;

  @Metadata({ data: "json, name=overwriteObjectsAlreadyExistingInSink" })
  overwriteObjectsAlreadyExistingInSink?: boolean;

  @Metadata({ data: "json, name=overwriteWhen" })
  overwriteWhen?: TransferOptionsOverwriteWhenEnum;
}
