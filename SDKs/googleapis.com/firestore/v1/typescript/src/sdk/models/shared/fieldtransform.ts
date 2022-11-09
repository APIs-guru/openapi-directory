import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ArrayValue } from "./arrayvalue";
import { Value } from "./value";
import { Value } from "./value";
import { Value } from "./value";
import { ArrayValue } from "./arrayvalue";

export enum FieldTransformSetToServerValueEnum {
    ServerValueUnspecified = "SERVER_VALUE_UNSPECIFIED"
,    RequestTime = "REQUEST_TIME"
}


// FieldTransform
/** 
 * A transformation of a field of the document.
**/
export class FieldTransform extends SpeakeasyBase {
  @Metadata({ data: "json, name=appendMissingElements" })
  appendMissingElements?: ArrayValue;

  @Metadata({ data: "json, name=fieldPath" })
  fieldPath?: string;

  @Metadata({ data: "json, name=increment" })
  increment?: Value;

  @Metadata({ data: "json, name=maximum" })
  maximum?: Value;

  @Metadata({ data: "json, name=minimum" })
  minimum?: Value;

  @Metadata({ data: "json, name=removeAllFromArray" })
  removeAllFromArray?: ArrayValue;

  @Metadata({ data: "json, name=setToServerValue" })
  setToServerValue?: FieldTransformSetToServerValueEnum;
}
