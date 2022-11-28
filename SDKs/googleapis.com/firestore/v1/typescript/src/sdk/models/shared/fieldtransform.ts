import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ArrayValue } from "./arrayvalue";
import { Value } from "./value";


export enum FieldTransformSetToServerValueEnum {
    ServerValueUnspecified = "SERVER_VALUE_UNSPECIFIED",
    RequestTime = "REQUEST_TIME"
}


// FieldTransform
/** 
 * A transformation of a field of the document.
**/
export class FieldTransform extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appendMissingElements" })
  appendMissingElements?: ArrayValue;

  @SpeakeasyMetadata({ data: "json, name=fieldPath" })
  fieldPath?: string;

  @SpeakeasyMetadata({ data: "json, name=increment" })
  increment?: Value;

  @SpeakeasyMetadata({ data: "json, name=maximum" })
  maximum?: Value;

  @SpeakeasyMetadata({ data: "json, name=minimum" })
  minimum?: Value;

  @SpeakeasyMetadata({ data: "json, name=removeAllFromArray" })
  removeAllFromArray?: ArrayValue;

  @SpeakeasyMetadata({ data: "json, name=setToServerValue" })
  setToServerValue?: FieldTransformSetToServerValueEnum;
}
