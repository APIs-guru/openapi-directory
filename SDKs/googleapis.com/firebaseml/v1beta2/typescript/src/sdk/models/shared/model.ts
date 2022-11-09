import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Operation } from "./operation";
import { ModelState } from "./modelstate";
import { TfLiteModel } from "./tflitemodel";


// Model
/** 
 * An ML model hosted in Firebase ML
**/
export class Model extends SpeakeasyBase {
  @Metadata({ data: "json, name=activeOperations", elemType: shared.Operation })
  activeOperations?: Operation[];

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=modelHash" })
  modelHash?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=state" })
  state?: ModelState;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=tfliteModel" })
  tfliteModel?: TfLiteModel;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
