import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BaseType } from "./basetype";
import { TypeLabelEntry } from "./typelabelentry";
import { Operation } from "./operation";



// Type
/** 
 * A resource type supported by Deployment Manager.
**/
export class Type extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=base" })
  base?: BaseType;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=insertTime" })
  insertTime?: string;

  @SpeakeasyMetadata({ data: "json, name=labels", elemType: TypeLabelEntry })
  labels?: TypeLabelEntry[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=operation" })
  operation?: Operation;

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;
}
