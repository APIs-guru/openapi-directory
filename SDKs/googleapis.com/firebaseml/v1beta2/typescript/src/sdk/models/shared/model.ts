import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ModelState } from "./modelstate";
import { TfLiteModelInput } from "./tflitemodel";
import { Operation } from "./operation";
import { TfLiteModel } from "./tflitemodel";



// ModelInput
/** 
 * An ML model hosted in Firebase ML
**/
export class ModelInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: ModelState;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=tfliteModel" })
  tfliteModel?: TfLiteModelInput;
}


// Model
/** 
 * An ML model hosted in Firebase ML
**/
export class Model extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activeOperations", elemType: Operation })
  activeOperations?: Operation[];

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=modelHash" })
  modelHash?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: ModelState;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=tfliteModel" })
  tfliteModel?: TfLiteModel;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
